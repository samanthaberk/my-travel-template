import React, { Component } from "react";
import QuestionSideBar from '../QuizComponents/QuestionSideBar';

import './PageTwo.css'

class PageTwo extends Component {
  state = {
    questionNum: "2",
    questionText: "HAVE YOU TRAVELED HERE BEFORE?"
  }

  render() {
    return (
      <section className="page-two row">

        <QuestionSideBar question={this.state.questionNum} text={this.state.questionText}/>
        <h1>page two</h1>
      </section>
    )
  }

}

export default PageTwo;
