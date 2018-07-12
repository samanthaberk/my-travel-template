import React, { Component } from "react";
import { Link } from 'react-router-dom';

import QuestionSideBar from '../Quiz/QuestionSideBar';
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

          <Link to={{pathname: '/question3'}}>
            <a class="btn-floating">
              <i className="material-icons">play_arrow</i>
            </a>
          </Link>
        </div>
      </section>
    );
  }

}

export default PageTwo;
