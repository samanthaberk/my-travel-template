import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Quiz.css';

class Checkbox extends Component {

  onCheckboxClick = (props) => {
      this.props.checkboxAnswerCallback(this.props.text);
  }
  render() {
  return(
          <label className="checkbox">
            <input type="checkbox" onClick={this.onCheckboxClick}/>
            <span className="answer-text">{this.props.text}</span>
          </label>
  );
  }
}

Checkbox.propTypes = {
  checkboxAnswerCallback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Checkbox;
