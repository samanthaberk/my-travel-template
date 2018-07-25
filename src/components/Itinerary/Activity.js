import React, { Component } from "react";
import PropTypes from 'prop-types';
import Draggable, {DraggableCore} from 'react-draggable';

class Activity extends Component {

  render() {
    let day;
    if (this.props.index === 0) {
      day = 1;
    } else if (this.props.index === 1) {
      day = 2;
    } else {
      day = Math.floor((this.props.index / 3) + 2)
    }

    if (
      this.props.index === 0 ||
      this.props.index === 1 ||
      (this.props.index - 1) % 3 === 0)  {
      return(
        <div>
          <h3 className="itinerary-heading">Day {day}: {this.props.city} </h3>
          <div className="itinerary-underline"></div>
          <h5>{this.props.content}</h5>
        </div>
      );
    } else {
      return (
        <div>
          <h5>{this.props.content}</h5>
        </div>
      );
    }
  }
}

export default Activity;
