import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import {useSelector, useDispatch} from 'react-redux'

import { login } from "../../store/session";
import './NavBar.css'

const NavBar = () => {
  const session = useSelector((state) => state.session);
  const user = useSelector((state) => state.session.user)
  const dispatch = useDispatch()
  const history = useHistory()
  
  const openApp = () => {
     console.log("here?");
     history.push("/app");
  }
  const loginDemoUser = async (e) => {
      e.preventDefault();

      const data = await dispatch(login("demo@aa.io", "password"));
      if (data.errors) {
      console.log("ERRORS?");
      return;
      }
      history.push("/app");
  };
  console.log(user)
  return (
    <nav>
      <ul className="nav-main">
        <li className="nav-text">
          
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
              Login
            </NavLink>
          </li>
          <button onClick={openApp} className={user ? `title_text` : `hidden`}>Launch FULL COURT PRESS</button>
          <li className={user ? `hidden` : `logout-button`}>
            
            <NavLink
              className="navlink"
              to="/sign-up"
              exact={true}
              activeClassName="active"
            >
              Sign Up
            </NavLink>
          </li>
          <li className={user ? `logout-button` : `hidden`}>
            <i className="navlink" class="fas fa-basketball-ball"></i>
            <LogoutButton />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
