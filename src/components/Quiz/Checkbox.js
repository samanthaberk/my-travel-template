import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Quiz.css';

class Checkbox extends Component {

  onCheckboxClick = (props) => {
      this.props.currentAnswerCallback(this.props.text);
  }
  render() {
  return(

    <div>
      <div className="col s12 m6 l6">
        <p>
          <label>
            <input type="checkbox" onClick={this.onCheckboxClick}/>
            <span>{this.props.text}</span>
          </label>
        </p>
      </div>
    </div>

  );
  }
}

Checkbox.propTypes = {
  currentAnswerCallback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Checkbox;
