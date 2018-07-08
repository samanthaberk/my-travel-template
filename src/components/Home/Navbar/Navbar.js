import React from 'react';

import SideBarButton from '../SideBar/SideBarButton';
import './Navbar.css';

const navbar = (props) =>
  (
    <header className="header">
      <nav className="navbar">
        <div className="toggle-navbar-btn">
          <SideBarButton click={ props.sidebarClickHandler }/>
        </div>
        <div className="logo"><a href="/">My Travel Template</a></div>
          <div className="navbar-space" />
          <ul className="navbar-items">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Sign-in</a></li>
          </ul>
      </nav>
    </header>
  );

export default navbar;
