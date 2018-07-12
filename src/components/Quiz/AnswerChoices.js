import React from "react";
import PropTypes from 'prop-types';

const answerChoices = (props) => (
  <div className ="col s8 quiz-answer-choices">
    <h3>{props.answers}</h3>
  </div>
);

answerChoices.propTypes = {
  answers: PropTypes.array.isRequired
};


export default answerChoices;
