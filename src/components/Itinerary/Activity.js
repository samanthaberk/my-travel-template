import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

class Activity extends Component {
  constructor() {
    super();
    this.state = {
      activity: 'Please Wait...'
    };
  }

  render() {

    if(this.props.day === 1) {
      return (
        <h5>Evening Activity</h5>
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
  day: PropTypes.number.isRequired,
  lastDay: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  pace: PropTypes.string.isRequired,
  sites: PropTypes.string.isRequired,
  internalTravel: PropTypes.string.isRequired,
  interests: PropTypes.string.isRequired,
  entertainment: PropTypes.string.isRequired,
};

export default Activity;
