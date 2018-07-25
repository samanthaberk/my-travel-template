import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Quiz.css';

class Radio extends Component {

  onRadioClick = (event) => {
    this.props.currentAnswerCallback(event.target.value);
  }

  render() {
  return(

          <label className="radio">
            <input className="with-gap" value={this.props.text} name="question-1" type="radio" onClick={this.onRadioClick} />
            <span className="answer-text">{this.props.text}</span>
          </label>
  );
  }
}

Radio.propTypes = {
  currentAnswerCallback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Radio;
