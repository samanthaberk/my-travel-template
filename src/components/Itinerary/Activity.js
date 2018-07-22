import React, { Component } from "react";
import PropTypes from 'prop-types';
import ActivityDetails from './ActivityDetails';

class Activity extends Component {

  render() {
    let city = this.props.city;

    if(this.props.day === 1) {
      return (
        <ActivityDetails
          userAnswers={this.props.userAnswers}
          city={city}
          timeOfDay="evening"
          handleActivityList={this.props.updateActivityState}
          activities={this.props.activityList}/>

      );
    } else if (this.props.day === this.props.lastDay) {
      return (
        <ActivityDetails
          userAnswers={this.props.userAnswers}
          city={city} timeOfDay="morning"
          handleActivityList={this.props.updateActivityState}
          activities={this.props.activityList} />
      );
    } else {
      return(
        <section>
          <ActivityDetails
            userAnswers={this.props.userAnswers}
            city={city}
            timeOfDay="morning"
            handleActivityList={this.props.updateActivityState}
            activities={this.props.activityList} />
          <ActivityDetails
            userAnswers={this.props.userAnswers}
            city={city}
            timeOfDay="afternoon"
            handleActivityList={this.props.updateActivityState}
            activities={this.props.activityList} />
          <ActivityDetails
            userAnswers={this.props.userAnswers}
            city={city}
            timeOfDay="evening"
            handleActivityList={this.props.updateActivityState}
            activities={this.props.activityList} />
        </section>
      );
    }
  }
}

Activity.propTypes = {
  userAnswers: PropTypes.object.isRequired,
};

export default Activity;
