import React from "react";
import PropTypes from 'prop-types';

const questionSideBar = (props) =>  (
    <div className="col s4 quiz-side-panel">
      <div className="questions-container">
        <h3>Question: <span>{ props.number} / 10</span></h3>
        <h5>{props.text}</h5>
      </div>
    </div>
  );

questionSideBar.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default questionSideBar;
