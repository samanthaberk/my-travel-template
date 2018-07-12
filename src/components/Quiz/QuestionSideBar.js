import React from "react";

const questionSideBar = (props) => (
  <div className="col s4 quiz-side-panel">
    <div className="questions-container">
      <h3>Question: <span>{props.number} / 10</span></h3>
      <h5>{props.text}</h5>
    </div>
  </div>
);

export default questionSideBar;
