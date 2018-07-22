import React, { Component } from "react";
import axios from 'axios';

class ActivityDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: 'Loading...',
    };
  }

  componentDidMount() {

    const {travelParty, budget, pace, sites} = this.props.userAnswers;
    const cityTravel = this.props.userAnswers.cityTravel.sort().join(', ');
    const interests = this.props.userAnswers.interests.sort().join(', ');
    const entertainment = this.props.userAnswers.entertainment.sort().join(', ');

    const currentActivities = this.props.activities;
    console.log(`currentActivities: ${currentActivities}`);
    const city = this.props.city;
    const timeOfDay = this.props.timeOfDay;

    const ACTIVITY_URL = `http://localhost:8080/filter/${city}/${timeOfDay}/${travelParty}/${budget}/${pace}/${sites}/${cityTravel}/${interests}/${entertainment}/1`;
    console.log(ACTIVITY_URL);
    axios.get(ACTIVITY_URL)
      .then(response => {
        const newActivity = response.data.content;
        const updatedActivityId = response.data.id;
        this.props.handleActivityList(updatedActivityId);

        this.setState({
          activity: newActivity,
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });
    }
  render () {
    return (
      <div>{this.state.activity}</div>
    );
  }

}


export default ActivityDetails;
