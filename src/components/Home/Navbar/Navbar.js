import React from 'react';
import logo from './logo.png';

import SideBarButton from '../SideBar/SideBarButton';
import './Navbar.css';

const navbar = (props) =>
  (
    <header className="header">
      <nav className="navbar">
        <div className="toggle-navbar-btn">
          <SideBarButton click={ props.sidebarClickHandler }/>
        </div>
        <img className="logo-img hide-on-med-and-down" src={logo} alt="logo" />
        <div className="logo">My Travel Template</div>
          <div className="navbar-space" />
          <ul className="navbar-items">
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Sign-in</a></li>
          </ul>
      </nav>
    </header>
  );

export default navbar;
