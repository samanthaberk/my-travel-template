import React from 'react';
import './About.css'

const about= (props) => (
  <section className="about">
    <div className="about-title center-align"><h3>How it Works</h3></div>
    <div className="content-title-underline"></div>
    <div className="about-content row">
      <div className="about-content-left col l6 valign-wrapper">
        <div className="about-container">
          <div className="about-content">
            <h4 className="about-title">
              <i className="material-icons number">filter_1</i>
             Tell us About Yourself
            </h4>
            <p className="about-description">
              Answer the questions in our interactive quiz to build your traveler profile.
            </p>
          </div>
        </div>
      </div>
      <div className="about-content-right col offset-l1 15 no-right-padding valign">
        <img src="http://via.placeholder.com/350x150" alt="Tell us About Yourself" className="responsive-img" />
      </div>
    </div>
  </section>
);

export default about;
