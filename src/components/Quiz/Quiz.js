import React, { Component } from "react";

import QuestionSideBar from './QuestionSideBar';
import Checkbox from '../QuizComponents/Checkbox';

import '../PageOne/PageOne.css'

class Quiz extends Component {
  state = {
    questions: 1,
    questionNumber: 1,
    questionText: "Question 1",
    progress: 0,
    answers: []
  };

  render() {
    return (
      <section>
        <QuestionSideBar number={this.state.questionNumber} text={this.state.questionText} />

      </section>
    );
  }
}

export default Quiz;
