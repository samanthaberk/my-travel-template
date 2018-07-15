import React from 'react';
import './About.css'

const about= (props) => (
  <section id="about">
    <div className="about-title center-align"><h3>How it Works</h3></div>
    <div className="about-content-title-underline"></div>
    <div className="row">
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
      <div className="col offset-l1 15 no-right-padding valign">
        <img src={require("./quizScreenshot.png")} alt="Tell us About Yourself" className="responsive-img" />
      </div>
    </div>

    <div className="center-align">
      <i className="material-icons circle-icon">panorama_fish_eye</i>
    </div>

    <div className="row">
      <div className="about-content col 15 valign">
        <img src="http://via.placeholder.com/350x150" alt="Get your personalized travel template" className="responsive-img" />
      </div>
      <div className="col l6 offset-l1 valign-wrapper">
        <div className="about-container">
          <div className="about-content-right">
            <h4 className="about-title">
              <i className="material-icons number">filter_2</i>
             Get your personalized travel template
            </h4>
            <p className="about-description">
              We build a custom day-to-day itinerary based on your responses with sites and activities we think you'll love!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="center-align">
      <i className="material-icons circle-icon">panorama_fish_eye</i>
    </div>

    <div className="row">
      <div className="about-content-left col l6 valign-wrapper">
        <div className="about-container">
          <div className="about-content">
            <h4 className="about-title">
              <i className="material-icons number">filter_3</i>
             Make it Your Own
            </h4>
            <p className="about-description">
              Easily tailor your travel plan to your needs by changing or removing items and adding in personal notes.
            </p>
          </div>
        </div>
      </div>
      <div className="col offset-l1 15 no-right-padding valign">
        <img src="http://via.placeholder.com/350x150" alt="Make it your own" className="responsive-img" />
      </div>
    </div>

    <div className="center-align">
      <i className="material-icons circle-icon">panorama_fish_eye</i>
    </div>

    <div className="row">
      <div className="col 15 valign">
        <img src="http://via.placeholder.com/350x150" alt="Get your personalized travel template" className="responsive-img" />
      </div>
      <div className="col l6 offset-l1 valign-wrapper">
        <div className="about-container">
          <div className="about-content-right">
            <h4 className="about-title">
              <i className="material-icons number">filter_4</i>
              Take it with you!
            </h4>
            <p className="about-description">
              Log in to save your itinerary or download a copy to bring on your trip.
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
);

export default about;
