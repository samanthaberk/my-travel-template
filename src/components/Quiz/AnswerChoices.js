import React from "react";
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const answerChoices = (props) => {
  const image = props.picture;
  const answers = props.answers.map((choice) => {
    return (
      <Checkbox text={choice} />
    )
  });
  return (
    <div style={{backgroundImage: 'url(' + require(`${image}`) +')', height: "100%", backgroundSize: 'cover'}} className ="col s8 quiz-answer-choices">
      {answers}
      <h1>{props.picture}</h1>
    </div>
  );
}


answerChoices.propTypes = {
  answers: PropTypes.array.isRequired,
  picture: PropTypes.string.isRequired
};


export default answerChoices;
