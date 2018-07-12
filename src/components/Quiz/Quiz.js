import React, { Component } from "react";

import data from './Data';
import QuestionSideBar from './QuestionSideBar';
import AnswerChoices from './AnswerChoices';

import './Quiz.css'

class Quiz extends Component {
  state = {
    questionNumber: data.questions[0].number,
    questionText: data.questions[0].question,
    backgroundImage: data.questions[0].bgImage,
    progress: 0,
    answers: data.questions[0].answerChoices,
    userAnswers: {
      duration: null,
      travelertype: null,
      pace: null,
      sites: null,
      internalTravel: null,
      cityTravel: null,
      travelParty: null,
      interests: [],
      entertainment: []
    }
  };

  render() {
    return (
      <section className="row quiz">
        <QuestionSideBar number={this.state.questionNumber} text={this.state.questionText} />
        <AnswerChoices answers= {this.state.answers} picture={this.state.backgroundImage}/>
    </section>
    );
  }
}

export default Quiz;
