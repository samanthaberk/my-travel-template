import React from "react";
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const answerChoices = (props) => {
  const answers = props.answers.map((choice) => {
    return (
      <Checkbox text={choice} />
    )
  });
  return (
    <div className ="col s8 quiz-answer-choices">
      {answers}
    </div>
  );
}

answerChoices.propTypes = {
  answers: PropTypes.array.isRequired
};


export default answerChoices;
