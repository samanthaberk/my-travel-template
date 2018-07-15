import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Quiz.css';

class Radio extends Component {

  onRadioClick = (event) => {
    this.props.currentAnswerCallback(event.target.value);
  }

  render() {
  return(

    <div>
      <div className="col s12 m6 l6">
        <p>
          <label>
            <input className="with-gap" value={this.props.text} name="question-1" type="radio" onClick={this.onRadioClick} />
            <span>{this.props.text}</span>
          </label>
        </p>
      </div>
    </div>

  );
  }
}

Radio.propTypes = {
  currentAnswerCallback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Radio;
