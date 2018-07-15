import React from 'react';
import './Jumbotron.css'
import { Link } from 'react-router-dom';

const jumbotron= (props) => (
  <section className="jumbotron center-align">
    <h3>Start Your Trip Here</h3>
    <h5>Create a custom travel itinerary fully personalized for your interests and budget. Now in <span>Beta</span> version for China!</h5>
    <Link to={{pathname: '/quiz'}}>
      <button className="btn waves-effect waves-light">
        START
        <i className="material-icons right"></i>
      </button>
    </Link>
      <p><a href="#about">or scroll down to <span>learn more</span></a></p>
      <p><a href="#about"className="arrow-btn"><i className="medium material-icons">arrow_downward</i></a></p>

  </section>
);

export default jumbotron;
