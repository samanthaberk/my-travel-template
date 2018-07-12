import React from "react";
import PropTypes from 'prop-types';

import './Quiz.css';

const checkbox = (props) => (

  <div>
    <div className="col s12 m6 l6 pg1-questions">
      <p className="pg1-questions">
        <label>
          <input type="checkbox" />
          <span>{props.text}</span>
        </label>
      </p>
    </div>
  </div>

);

checkbox.propTypes = {
  text: PropTypes.string.isRequired
};

export default checkbox;
