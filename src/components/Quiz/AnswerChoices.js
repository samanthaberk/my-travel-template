import React from "react";
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Radio from './Radio';

const answerChoices = (props) => {
    let answers = null;
  if (props.format === 'checkbox') {
    answers = props.answers.map((choice) => {
      return (
        <Checkbox
          text={choice}
          key={choice}
          value={choice}
          currentAnswerCallback={props.onAnswerSelect}
        />
      )
    });
  } else if (props.format === 'radio') {
     answers = props.answers.map((choice) => {
      return (
        <Radio
          text={choice}
          key={choice}
          value={choice}
          currentAnswerCallback={props.onAnswerSelect}
        />
      )
    });
  }

  return (
    <div className={`col s8 pg-${props.image}`}>
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
