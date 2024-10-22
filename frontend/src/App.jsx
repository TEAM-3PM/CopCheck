import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import ReportForm from './pages/ReportForm';
import OfficerSearchForm from './pages/OfficerSearchForm.jsx';
import VideoPlayer from './components/cloudinary/VideoPlayer.jsx';
import ReportsList from './pages/ListOfReports.jsx';
import OfficerSpecs from './pages/OfficerSpecs.jsx';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/complaint' element={<ReportForm />} />
        <Route path='/officer-search' element={<OfficerSearchForm />} />
        <Route path='/reports' element={<ReportsList />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/officers/:officerId' element={<OfficerSpecs />} />

      </Routes>
    </main>
  </>;
}
