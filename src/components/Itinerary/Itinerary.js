import React, { Component } from "react";

import Navbar from '../Home/Navbar/Navbar';
import SideBar from '../Home/SideBar/SideBar';
import Backdrop from '../Home/Backdrop/Backdrop';
import Jumbotron from '../Home/Jumbotron/Jumbotron';
import About from '../Home/About/About';
import Features from '../Home/Features/Features';
import Footer from '../Home/Footer/Footer';

class Itinerary extends Component {

  render() {
    return (
      <div>
        <h3>The duration is: {this.props.userAnswers.duration}</h3>
        <h3>The traveler type is: {this.props.userAnswers.travelerType}</h3>
        <h3>The pace is: {this.props.userAnswers.pace}</h3>
        <h3>The sites is: {this.props.userAnswers.sites}</h3>
        <h3>The travelParty is: {this.props.userAnswers.travelParty}</h3>
        <h3>The budget is: {this.props.userAnswers.budget}</h3>           
      </div>
    );
  }
}

export default Itinerary;
