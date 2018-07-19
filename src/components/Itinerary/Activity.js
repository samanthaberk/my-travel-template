import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import ActivityDetails from './ActivityDetails';

class Activity extends Component {
  constructor() {
    super();

  }

  render() {
    console.log(this.props.city);
    let city = this.props.city;

    if(this.props.day === 1) {
      return (
        <ActivityDetails userAnswers={this.props.userAnswers} city={city}/>
      );
    } else if (this.props.day === this.props.lastDay) {
      return (
        <h5>Morning Activity</h5>
      );
    } else {
      return(
        <section>
          <h5>Morning Activity</h5>
          <h5>Afternoon Activity</h5>
          <h5>Evening Activity</h5>
        </section>
      );
    }
  }
}

Activity.propTypes = {
  userAnswers: PropTypes.object.isRequired,
};

export default Activity;
