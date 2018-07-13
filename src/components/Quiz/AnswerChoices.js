import React, { Component } from "react";
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const answerChoices = (props) => {

  const onCheckboxSelect = () => {
    console.log("event");
    // this.props.updateCurrentAnswerCallback(event.target.value);
  };

  const image = props.picture;
  const answers = props.answers.map((choice) => {
    return (
      <Checkbox
        text={choice}
        key={choice}
        value={choice}/>
    )
  });
  return (
    <div style={{background: 'linear-gradient( rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)),url(' + require(`${image}`) +')', height: "100%", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className ="col s8 quiz-answer-choices">
      {answers}
      <a className="btn-floating">
        <i className="material-icons">play_arrow</i>
      </a>
    </div>
  );
}


answerChoices.propTypes = {
  answers: PropTypes.array.isRequired,
  picture: PropTypes.string.isRequired
};


export default answerChoices;
