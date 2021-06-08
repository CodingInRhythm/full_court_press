import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import {useSelector} from 'react-redux'

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
        <li className={user ? `hidden` : `logout-button`}>
          <i class="fas fa-basketball-ball"></i>
          <NavLink
            className="navlink"
            to="/login"
            exact={true}
            activeClassName="active"
          >
            Login
          </NavLink>
        </li>
        <li className={user ? `title_text` : `hidden`}>FULL COURT PRESS</li>
        <li className={user ? `hidden` : `logout-button`}>
          <i class="fas fa-basketball-ball"></i>
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
      </ul>
    </nav>
  );
}

export default NavBar;
