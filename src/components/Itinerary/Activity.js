import React, { Component } from "react";
import PropTypes from 'prop-types';
import ActivityDetails from './ActivityDetails';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class Activity extends Component {

  render() {
    let city = this.props.city;

    if(this.props.day === 1) {
      return (
        <ActivityDetails
          userAnswers={this.props.userAnswers}
          city={city}
          timeOfDay="evening" handleActivityList={this.props.updateActivityState}
          currentActivities={this.props.activityIds}/>
      );
    } else if (this.props.day === this.props.lastDay) {
      return (
        <ActivityDetails
          userAnswers={this.props.userAnswers}
          city={city}
          timeOfDay="morning" handleActivityList={this.props.updateActivityState}
          currentActivities={this.props.activityIds}/>
      );
    } else {
      return(
        <section>
          <ActivityDetails
            userAnswers={this.props.userAnswers}
            city={city}
            timeOfDay="morning" handleActivityList={this.props.updateActivityState}
            currentActivities={this.props.activityIds}/>
          <ActivityDetails
            userAnswers={this.props.userAnswers}
            city={city}
            timeOfDay="afternoon" handleActivityList={this.props.updateActivityState}
            currentActivities={this.props.activityIds}/>
          <ActivityDetails
            userAnswers={this.props.userAnswers}
            city={city}
            timeOfDay="evening" handleActivityList={this.props.updateActivityState}
            currentActivities={this.props.activityIds}/>
        </section>
      );
    }
  }
}

Activity.propTypes = {
  userAnswers: PropTypes.object.isRequired,
};

export default DragDropContext (HTML5Backend)(Activity);
