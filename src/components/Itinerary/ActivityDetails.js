import React, { Component } from "react";
import Draggable, {DraggableCore} from 'react-draggable';

class ActivityDetails extends Component {

  render () {
    const content = this.props.content

    return (
      <Draggable>
      <div>
        <h5>{content}</h5>
      </div>
      </Draggable>
    );
  }

}


export default ActivityDetails;
