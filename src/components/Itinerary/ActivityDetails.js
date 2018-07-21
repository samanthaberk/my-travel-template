import React, { Component } from "react";
import axios from 'axios';

class ActivityDetails extends Component {
  constructor() {
    super();
    this.state = {
      activity: 'something',
    };
  }

  componentDidMount() {
    console.log(this.props.userAnswers);
    console.log(this.props.city);

    const {travelParty, budget, pace, sites} = this.props.userAnswers;
    const cityTravel = this.props.userAnswers.cityTravel.sort().join(', ');
    const interests = this.props.userAnswers.interests.sort().join(', ');
    const entertainment = this.props.userAnswers.entertainment.sort().join(', ');

    const city = this.props.city;
    const timeOfDay = this.props.timeOfDay;
    // const activityList = this.state.activities.join(', ');

    // const stateActivities = this.state.activities;
    const ACTIVITY_URL = `http://localhost:8080/filter/${city}/${timeOfDay}/${travelParty}/${budget}/${pace}/${sites}/${cityTravel}/${interests}/${entertainment}`;

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
