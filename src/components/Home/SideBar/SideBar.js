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
        <li onClick={props.click}><a href="#about">About</a></li>
        <li onClick={props.click}><a href="#features">Features</a></li>
      </ul>
    </nav>
  );
};

export default sideBar;
