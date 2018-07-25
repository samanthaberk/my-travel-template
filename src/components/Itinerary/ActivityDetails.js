import React, { Component } from "react";
import Draggable, {DraggableCore} from 'react-draggable';

class ActivityDetails extends Component {

  render () {
    const content = this.props.content

    return (
      <Draggable>
        <div className='activity-item'>{content}</div>
      </Draggable>
    );
  }

}


export default ActivityDetails;
