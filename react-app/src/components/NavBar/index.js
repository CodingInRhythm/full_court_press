import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import {useSelector} from 'react-redux'
import { AboutModal } from '../About/AboutModal';

const NavBar = () => {

  const user = useSelector((state) => state.session.user)

  console.log(user)
  return (
    <nav>
      <ul className="nav-main">
        <li className="nav-text">
          <i class="fas fa-basketball-ball"></i>
          <NavLink
            className="navlink"
            to="/"
            exact={true}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <AboutModal />
        </li>
        <h1 id="nav-banner" className="nav-text">
          Full Court Press
        </h1>
        <div className="navbar-right">
          <div className={user ? "hidden" : "demoUserbutton"}>
            <button onClick={(e) => loginDemoUser(e)} id="demoUserbutton">
              {!session.user ? (
                <span>Login as demo user</span>
              ) : (
                <span>Enter App</span>
              )}
            </button>
          </div>
          <li className={user ? `hidden` : `logout-button`}>
            <NavLink
              className="navlink"
              to="/login"
              exact={true}
              activeClassName="active"
            >
              <span className="button-text">Login</span>
            </NavLink>
          </li>
          {user && (
            <li id="welcome-text" className={user ? "welcome-text" : "hidden"}>
              Welcome, {user.username}!
            </li>
          )}
          {!location.pathname.includes("app") && (
            <button
              onClick={openApp}
              className={user ? `title_text` : `hidden`}
            >
              Launch FULL COURT PRESS
            </button>
          )}
          <li className={user ? `hidden` : `logout-button`}>
            <NavLink
              className="navlink"
              to="/sign-up"
              exact={true}
              activeClassName="active"
            >
              <span className="button-text">Sign Up</span>
            </NavLink>
          </li>
          <li className={user ? `logout-button` : `hidden`}>
            <LogoutButton />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
