import React from 'react';

import './SideBar.css';

const sideBar = props => {
  let sidebarClasses = 'sidebar';
  if(props.show) {
    sidebarClasses = 'sidebar open';
  }
  return (
    <nav className={sidebarClasses}>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="">Sign-in</a></li>
      </ul>
    </nav>
  );
};

export default sideBar;
