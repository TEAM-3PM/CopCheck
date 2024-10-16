import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";

import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  // users shouldn't be able to see the login page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to 
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData));
    if (error) return setErrorText(error.message);
    setCurrentUser(user);
    navigate(`/`);
  };

  return <>
    <div className='wrapper'>
      {/* <h1>Login</h1> */}
      <form onSubmit={handleSubmit} aria-labelledby="login-heading" className='whole-form'>
        <h2 id='login-heading'>Log back in!</h2>

        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input type="text" autoComplete="username" id="username" name="username" placeholder="Username" />
        </div>

        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input type="password" autoComplete="current-password" id="password" name="password" placeholder="Password" />
        </div>

        <div className="remember-forgot">
          <label id="remember-me"> <input type="checkbox" />Remember me?</label>
        </div>

        <button id="login-button"> Login!</button>

        <div className='register-link'>
          <p>Don't have an account? <Link to="/sign-up">Register!</Link></p>
        </div>


      </form>
    </div>
    {!!errorText && <p>{errorText}</p>}
  </>;
}
