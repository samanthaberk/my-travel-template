import React from 'react';
import './NotFound.css';

import { Link } from 'react-router-dom';

const NotFound= (props) => (
  <section className="not-found center-align">
    <h3>Lost?</h3>
    <h5>No worries! We can help you find your way back <Link to={{pathname: '/'}}>home</Link>.</h5>
  </section>
);

export default NotFound;
