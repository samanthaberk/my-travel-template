import React from 'react';
import './Features.css'

const features = (props) => (
  <section id="features">
    <div className="features-title center-align"><h3>Features</h3></div>
    <div className="features-content-title-underline"></div>

    <div className="row">
      <div className="col l4">
        <div className="center feature">
          <i className="material-icons feature-icon">perm_identity</i>
          <p className="feature-caption">Tailored to You</p>
          <p className="feature-description center"> Want to hit all the top sites, or explore places off the beaten path? Your travel template includes information about sites and attractions relevant to you.</p>
        </div>
      </div>

      <div className="col l4">
        <div className="center feature">
          <i className="material-icons feature-icon">query_builder</i>
          <p className="feature-caption">Saves Time</p>
          <p className="feature-description center">No more shifting through countless websites and guidebooks to plan your vacation. Get a personalized itinerary in minutes and customize it to build your perfect trip.</p>
        </div>
      </div>

      <div className="col l4">
        <div className="center feature">
          <i className="material-icons feature-icon">map</i>
          <p className="feature-caption">Easy to Customize</p>
          <p className="feature-description center">Drag and drop components to rearrange portions of your trip, or add notes about accommodation, restaurants, and anything else directly in the itinerary.</p>
        </div>
      </div>

    </div>
  </section>
);

export default features;
