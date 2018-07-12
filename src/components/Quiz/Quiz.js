import React, { Component } from "react";

import data from './Data';
import QuestionSideBar from './QuestionSideBar';
import Checkbox from './Checkbox';

import './Quiz.css'

class Quiz extends Component {
  state = {
    questions: 1,
    questionNumber: data.questions[0].number,
    questionText: data.questions[0].question,
    progress: 0,
    answers: data.questions[0].answerChoices
  };

  render() {
    return (
      <section className="row">
        <QuestionSideBar number={this.state.questionNumber} text={this.state.questionText} />
          <div class="col s8">
            <h3> page content  </h3>
          </div>
      </section>

    );
  }
}

export default Quiz;
