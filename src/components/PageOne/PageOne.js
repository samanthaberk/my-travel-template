import React, { Component } from "react";
import QuestionSideBar from '../QuizComponents/QuestionSideBar';
import Checkbox from '../QuizComponents/Checkbox';

import './PageOne.css'

class PageOne extends Component {
  state = {
    questionNum: "1",
    questionText: "HOW LONG IS YOUR TRIP?",
    answer1: "1 Week",
    answer2: "2 Weeks",
    answer3: "3 Weeks",
    answer4: "4 Weeks"
  }

  render() {
    return (
      <section className="page-one row">

        <QuestionSideBar question={this.state.questionNum} text={this.state.questionText}/>

          <div className="col s8 quiz-page-content">

            <div className="row">
              <Checkbox text={this.state.answer1}/>
              <Checkbox text={this.state.answer2}/>
            </div>

            <div className="row">
              <Checkbox text={this.state.answer3}/>
              <Checkbox text={this.state.answer4}/>
            </div>

          </div>
      </section>
    )
  }
}

export default PageOne;
