import React, { Component } from "react";

import data from './Data';
import QuestionSideBar from './QuestionSideBar';
import AnswerChoices from './AnswerChoices';

import './Quiz.css'

class Quiz extends Component {
  state = {
    questions: 1,
    questionNumber: data.questions[0].number,
    questionText: data.questions[0].question,
    backgroundImage: data.questions[0].bgImage,
    progress: 0,
    answers: data.questions[0].answerChoices
  };

  render() {
    return (
      <section className="row">
        <QuestionSideBar number={this.state.questionNumber} text={this.state.questionText} />
        <AnswerChoices answers= {this.state.answers} picture={this.state.backgroundImage}/>
    </section>
    );
  }
}

export default Quiz;
