import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import letterLogo from "../Cop Check Assets/4.png";
import { SearchBar } from "./SearchBar";
export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header>
      <a id="logo" href="/">
        <img src={letterLogo} alt="" id="navBarLogo" />
      </a>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {/* <NavLink to="/officer-search">Search Officer</NavLink> */}
          </li>
          <li>
            <NavLink to="/feed">Feed</NavLink>
          </li>

          {currentUser ? (
            <>
              <li>
                <NavLink to="/complaint">File A Complaint</NavLink>
              </li>
              <li>
                <SearchBar />
              </li>
              <li>
                <NavLink to={`/users/${currentUser.id}`}>
                  {currentUser.username}
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
              <li>
                <SearchBar />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
