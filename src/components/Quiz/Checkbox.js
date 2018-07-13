import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Quiz.css';

class checkbox extends Component {

  checkboxClicked = (props) => {
      alert(this.props.text);
  }
  render() {
  return(

    <div>
      <div className="col s12 m6 l6">
        <p>
          <label>
            <input type="checkbox" onClick={this.checkboxClicked}/>
            <span>{this.props.text}</span>
          </label>
        </p>
      </div>
    </div>

  );
  }
}

checkbox.propTypes = {
  text: PropTypes.string.isRequired
};

export default checkbox;
