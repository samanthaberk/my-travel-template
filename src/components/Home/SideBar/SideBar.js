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
        <li><a href="#">About</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Sign-in</a></li>
      </ul>
    </nav>
  );
};

export default sideBar;
