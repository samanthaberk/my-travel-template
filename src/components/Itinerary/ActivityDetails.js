import React, { Component } from "react";
import axios from 'axios';

class ActivityDetails extends Component {
  constructor() {
    super();
    this.state = {
      activity: 'something'
    };
  }

  componentDidMount = () => {
    console.log(this.props.userAnswers);
    console.log(this.props.city);

    const {travelParty, budget, pace, sites} = this.props.userAnswers;
    const cityTravel = this.props.userAnswers.cityTravel.sort().join(', ');
    const interests = this.props.userAnswers.interests.sort().join(', ');
    const entertainment = this.props.userAnswers.entertainment.sort().join(', ');

    const city = this.props.city;
    const timeOfDay = this.props.timeOfDay;

    const ACTIVITY_URL = `http://localhost:8080/filter/${city}/${timeOfDay}/${travelParty}/${budget}/${pace}/${sites}/${cityTravel}/${interests}/${entertainment}`;
    axios.get(ACTIVITY_URL)
      .then(response => {
        console.log(response);
        this.setState({
          activity: response.data.content
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });
    }
    debugger
  render () {
    return (
      <div>{this.state.activity}</div>
    );
  }

}


export default ActivityDetails;
