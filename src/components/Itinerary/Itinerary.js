import React, { Component } from "react";
import axios from 'axios';

import Navbar from '../Home/Navbar/Navbar';
import SideBar from '../Home/SideBar/SideBar';
import Backdrop from '../Home/Backdrop/Backdrop';
import Jumbotron from '../Home/Jumbotron/Jumbotron';
import About from '../Home/About/About';
import Features from '../Home/Features/Features';
import Footer from '../Home/Footer/Footer';

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: 'hardcoded value'
    };

  }

  componentDidMount = () => {
    // const duration = this.props.userAnswers.duration;
    // const travelerType = this.props.userAnswers.travelerType;
    // const pace = this.props.userAnswers.pace;
    // const transport = this.props.userAnswers.internalTravel.sort().join(', ');
    // const TEMPLATES_URL = `http://localhost:8080/templates/duration/${duration}/travelers/${travelerType}/pace/${pace}/transport/${transport}`;
    const TEMPLATES_URL = 'http://localhost:8080/templates/duration/1%20Week/travelers/First-Timer/pace/Average%20Pace/transport/Internal%20Flights,%20Train';
    axios.get(TEMPLATES_URL)
      .then(response => {
        console.log(response);
        this.setState({
          template: response.data[0].content
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  render() {


    return (
      <div>
        {/* Navbar */}


        <div className="row">

          <div className="col s3">
            <h3>Destination <span>China</span></h3>
            <p><span>欢迎</span>, welcome to China!</p>

          </div>

          <div className="col s9">
            <h3>template: {this.state.template}</h3>
          </div>

        </div>
        {/*
        // <h3>The duration is: {this.props.userAnswers.duration}</h3>
        // <h3>The traveler type is: {this.props.userAnswers.travelerType}</h3>
        // <h3>The pace is: {this.props.userAnswers.pace}</h3>
        // <h3>The sites is: {this.props.userAnswers.sites}</h3>
        // <h3>The travelParty is: {this.props.userAnswers.travelParty}</h3>
        // <h3>The budget is: {this.props.userAnswers.budget}</h3>
        // <h3>Your internal travel preferences are: {this.props.userAnswers.internalTravel}</h3>
        */}
      </div>
    );
  }
}

export default Itinerary;
