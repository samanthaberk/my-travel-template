import React, { Component } from "react";
import axios from 'axios';

import City from './City';
import Activity from './Activity';

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: 'Please Wait...'
    };

  }

  componentDidMount = () => {
    const duration = this.props.userAnswers.duration;
    const travelerType = this.props.userAnswers.travelerType;
    const pace = this.props.userAnswers.pace;
    const transport = this.props.userAnswers.internalTravel.sort().join(', ');
    const TEMPLATES_URL = `http://localhost:8080/templates/duration/${duration}/travelers/${travelerType}/pace/${pace}/transport/${transport}`;
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
    let data = this.state.template.split(",");
    const cities = data.map((city, index) => {
      return (
        <section>

          <City
            key={index}
            day={index + 1}
            city={city}
          />
          <Activity
            key={index}
            day={index + 1}
            lastDay={data.length}
          />

        </section>
      )
    });


    return (
      <div>
        {/* Navbar */}


        <div className="row">

          <div className="col s3">
            <h3>Destination <span>China</span></h3>
            <p><span>欢迎</span>, welcome to China!</p>

          </div>

          <div className="col s9">
            <h3>{cities}</h3>
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
