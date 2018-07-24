import React, { Component } from "react";
import axios from 'axios';

import City from './City';
import Activity from './Activity';

import './Itinerary.css';

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: null,
      activities: null,
      cities: null,
      hasBeenCalled: false
    };
  }

  // updateActivities = (id) => {
  //   const activityList = [...this.state.activities, id];
  //   this.setState({
  //     activities: activityList
  //   })
  //   console.log(this.state.activities);
  // }

  componentDidMount = () => {
    const {duration, travelerType, pace} = this.props.userAnswers;
    const transport = this.props.userAnswers.internalTravel.sort().join(', ');
    const TEMPLATES_URL = `http://localhost:8080/templates/duration/${duration}/travelers/${travelerType}/pace/${pace}/transport/${transport}`;
    axios.get(TEMPLATES_URL)
      .then(response => {
        console.log(response);
        this.setState({
          template: response.data.id,
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  createItinerary = () => {
    const userAnswers = {
      templateId: this.state.template,
      type: this.props.userAnswers.travelParty,
      budget: this.props.userAnswers.budget,
      pace: this.props.userAnswers.pace,
      sites: this.props.userAnswers.sites,
      cityTravel: this.props.userAnswers.cityTravel.join(', '),
      interests: this.props.userAnswers.interests.join(', '),
      entertainment: this.props.userAnswers.entertainment.join(', ')
    }

    const userAnswersString =
    `templateId=${this.state.template}
    &type=${this.props.userAnswers.travelParty}
    &budget=${this.props.userAnswers.budget}
    &pace=/${this.props.userAnswers.pace}
    &sites=${this.props.userAnswers.sites}
    &cityTravel=${this.props.userAnswers.cityTravel.join(', ')}
    &interests=${this.props.userAnswers.interests.join(', ')}
    &entertainment=${this.props.userAnswers.entertainment.join(', ')}`

    console.log(userAnswers);
    axios.post(`http://localhost:8080/getActivities`, userAnswers)
    .then(response => {
      console.log(response);
      this.setState({
        activities: response.data,
        hasBeenCalled: true
      })
    })
    .catch(function (error) {
      console.log(error.message);
    });
  }

  render() {
    if (this.state.template !== null && this.state.hasBeenCalled !== true) {
      this.createItinerary();
    }
    console.log();
    let itinerary;
    if (this.state.activities === null) {
      itinerary = <div><h5>Loading...</h5></div>;

    } else {
      itinerary = this.state.activities.map((activity, index) => {
        return (
          <section>
            <h3>Day {index+1}: {activity.city}</h3>
            <Activity
              key={index}
              day={index}
              lastDay={this.state.activities.length-1}
              content={activity.content}
            />

          </section>
        )
      });
    }


    return (
      <div className="itinerary-container">

        <div className="row">

          <div className="col s3 itinerary-side-panel">
            <h3>Destination <span>China</span></h3>
            <p><span>欢迎</span>, welcome to China!</p>

          </div>

          <div className="col s9 itinerary-main-content">
            <h3>{itinerary}</h3>
          </div>

        </div>

      </div>
    );
  }
}

export default Itinerary;
