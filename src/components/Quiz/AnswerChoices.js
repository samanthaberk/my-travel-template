import React, { Component } from "react";
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Radio from './Radio';

const answerChoices = (props) => {

  const image = props.image;
  let answers = null;
  if (props.format === 'checkbox') {
    answers = props.answers.map((choice) => {
      return (
        <Checkbox
          text={choice}
          key={choice}
          value={choice}/>
      )
    });
  } else if (props.format == 'radio') {
     answers = props.answers.map((choice) => {
      return (
        <Radio
          text={choice}
          key={choice}
          value={choice}
          CurrentAnswerCallback={props.onAnswerSelect}
        />
      )
    });
  }

  return (
    <div style={{background: 'linear-gradient( rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)),url(' + require(`${image}`) +')', height: "100%", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className ="col s8 quiz-answer-choices">
      <form>
      {answers}
      </form>
      <a className="btn-floating" onClick={props.nextPageCallback}>
        <i className="material-icons">play_arrow</i>
      </a>
    </div>
  );
}


answerChoices.propTypes = {
  nextPageCallback: PropTypes.func.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  format: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired
};


export default answerChoices;
