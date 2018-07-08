import React from 'react';

import './Footer.css';

const footer = (props) => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">My Travel Template</h5>
          <p className="footer-text">This project was created by a student in Cohort 9 of <a href="https://www.adadevelopersacademy.org/">Ada Developers Academy</a>, a non-profit training program that enables women and gender diverse people to enter the field of software development.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Menu</h5>
          <ul>
            <li><a href="#!">Create a Travel Template</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2018 Copyright Semantic Sam
      </div>
    </div>
  </footer>
);

export default footer;
