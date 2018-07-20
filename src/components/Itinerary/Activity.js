import React, { Component } from "react";
import PropTypes from 'prop-types';
import ActivityDetails from './ActivityDetails';

class Activity extends Component {

  render() {
    console.log(this.props.city);
    let city = this.props.city;

    if(this.props.day === 1) {
      return (
        <ActivityDetails userAnswers={this.props.userAnswers} city={city} timeOfDay="evening" />
      );
    } else if (this.props.day === this.props.lastDay) {
      return (
        <ActivityDetails userAnswers={this.props.userAnswers} city={city} timeOfDay="morning" />
      );
    } else {
      return(
        <section>
          <ActivityDetails userAnswers={this.props.userAnswers} city={city} timeOfDay="morning" />
          <ActivityDetails userAnswers={this.props.userAnswers} city={city} timeOfDay="afternoon" />
          <ActivityDetails userAnswers={this.props.userAnswers} city={city} timeOfDay="evening" />
        </section>
      );
    }
  }
}

Activity.propTypes = {
  userAnswers: PropTypes.object.isRequired,
};

export default Activity;
