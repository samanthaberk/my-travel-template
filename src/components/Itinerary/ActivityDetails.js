import React, { Component } from "react";
import axios from 'axios';

import { DragSource } from 'react-dnd';

const activitySource = {
  beginDrag(props) {
    return props.ActivityDetails;
  },
  endDrag(props, monitor, component) {
    return props.handleDrop(props.ActivityDetails.id);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class ActivityDetails extends Component {
  constructor() {
    super();
    this.state = {
      activity: 'something'
    };
  }

  getActivity() {
    const {travelParty, budget, pace, sites} = this.props.userAnswers;
    const cityTravel = this.props.userAnswers.cityTravel.sort().join(', ');
    const interests = this.props.userAnswers.interests.sort().join(', ');
    const entertainment = this.props.userAnswers.entertainment.sort().join(', ');

    const city = this.props.city;
    const timeOfDay = this.props.timeOfDay;

    const currentActivities = this.props.currentActivities;
    console.log(`currentActivities: ${currentActivities}`);

    const ACTIVITY_URL = `http://localhost:8080/filter/${city}/${timeOfDay}/${travelParty}/${budget}/${pace}/${sites}/${cityTravel}/${interests}/${entertainment}/${currentActivities}`;
    console.log(ACTIVITY_URL);

    axios.get(ACTIVITY_URL)
    .then(response => {
      const newActivity = response.data.content;
      const updatedActivityId = response.data.id;
      this.props.handleActivityList(updatedActivityId);

      this.setState({activity: newActivity});
    })
    .catch(function(error) {
      console.log(error.message);
    });
  }

  componentDidMount() {
    this.getActivity();
    }
  render () {
    const { isDragging, connectDragSource, activityDetails } = this.props

    return connectDragSource(
      <div>{this.state.activity}</div>
    );
  }

}


export default DragSource('ActivityDetail', activitySource, collect)(ActivityDetails);
