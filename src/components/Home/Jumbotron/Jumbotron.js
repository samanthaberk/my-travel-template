import React from 'react';
import './Jumbotron.css'

const jumbotron= (props) => (
  <section className="jumbotron center-align">
    <h3>Start Your Trip Here</h3>
    <h5>Create a custom travel itinerary fully personalized for your interests and budget. Now in <span>Beta</span> version for China!</h5>
    <button className="btn waves-effect waves-light">START
      <i className="material-icons right"></i>
    </button>
      <p>or scroll down to <span>learn more</span><span className="arrow-btn"><i className="medium material-icons">arrow_downward</i></span></p>

  </section>
);

export default jumbotron;
