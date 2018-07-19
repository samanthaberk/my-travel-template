import React from "react";
import PropTypes from 'prop-types';

const Activity = (props) => {

  if(props.day === 1) {
    return (
      <h5>Evening Activity</h5>
    );
  } else if (props.day === props.lastDay) {
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

Activity.propTypes = {

};

export default Activity;
