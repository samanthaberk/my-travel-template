import React, { Component } from "react";
import QuestionSideBar from '../QuizComponents/QuestionSideBar';
import Checkbox from '../QuizComponents/Checkbox';

import './PageThree.css'

class PageThree extends Component {
  state = {
    questionNum: "3",
    questionText: "WHAT'S YOUR TRAVEL PACE?",
    answer1: "Slow and Leisurely",
    answer2: "Medium Pace",
    answer3: "Pack it all in!"
  }

  render() {
    return (
      <section className="page-three row">

        <QuestionSideBar question={this.state.questionNum} text={this.state.questionText}/>
        <div className="col s8 quiz-two-content-bg">

          <div className="row first-checkbox">
            <Checkbox text={this.state.answer1}/>
          </div>

          <div className="row second-checkbox">
            <Checkbox text={this.state.answer2}/>
          </div>

          <div className="row second-checkbox">
            <Checkbox text={this.state.answer3}/>
          </div>

          <a class="btn-floating">
            <i className="material-icons">play_arrow</i>
          </a>

        </div>
      </section>
    );
  }

}

export default PageThree;
