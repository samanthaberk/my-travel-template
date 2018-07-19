import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

class ActivityDetails extends Component {
  constructor() {
    super();
    this.state = {
      detail: 'something'
    };
  }

  componentDidMount = () => {
    console.log(this.props.userAnswers);
    console.log(this.props.city);

    const {type, budget, pace, sites, internalTravel, interests, entertainment} = this.props.userAnswers;
    const city = this.props.city;
    // const type = this.props.type;
    // const budget = this.props.budget;
    // const pace = this.props.pace;
    // const sites = this.props.sites;
    // const internalTravel = this.props.internalTravel;
    // const interests = this.props.interests;
    // const entertainment = this.props.entertainment;
    const timeOfDay = 'morning';
    const ACTIVITY_URL = `http://localhost:8080/filter/${city}/${timeOfDay}/${type}/${budget}/${pace}/${sites}/${internalTravel}/${interests}/${entertainment}`

    axios.get(ACTIVITY_URL)
      .then(response => {
        console.log(response);
        this.setState({
          detail: response.data[0].content
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });
    }

  render () {
    return (
      <div>{this.state.detail}</div>
    );
  }

}


export default ActivityDetails;
