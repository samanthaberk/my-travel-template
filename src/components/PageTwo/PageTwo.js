import React, { Component } from "react";
import QuestionSideBar from '../QuizComponents/QuestionSideBar';
import Checkbox from '../QuizComponents/Checkbox';

import './PageTwo.css'

class PageTwo extends Component {
  state = {
    questionNum: "2",
    questionText: "HAVE YOU TRAVELED HERE BEFORE?",
    answer1: "First-Timer",
    answer2: "Return-Traveler"
  }

  render() {
    return (
      <section className="page-two row">

        <QuestionSideBar question={this.state.questionNum} text={this.state.questionText}/>
        <div className="col s8 quiz-two-content-bg">

          <div className="row first-checkbox">
            <Checkbox text={this.state.answer1}/>
          </div>

          <div className="row second-checkbox">
            <Checkbox text={this.state.answer2}/>
          </div>

        </div>
      </section>
    );
  }

}

export default PageTwo;
