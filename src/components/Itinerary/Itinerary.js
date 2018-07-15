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
        <h3>The duration is: {this.props.duration}</h3>
      </div>
    );
  }
}

export default Itinerary;
