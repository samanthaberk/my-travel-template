import React from "react";

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

export default checkbox;
