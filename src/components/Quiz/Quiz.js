import React, { Component } from "react";

import data from './Data';
import QuestionSideBar from './QuestionSideBar';
import AnswerChoices from './AnswerChoices';

import './Quiz.css'

class Quiz extends Component {
  constructor(){
    super();
    this.state = {
      question: data.questions[0].question,
      questionNumber: data.questions[0].number,
      questionText: data.questions[0].questionText,
      backgroundImage: data.questions[0].bgImage,
      answers: data.questions[0].answerChoices,
      userAnswers: {
        duration: null,
        travelerType: null,
        pace: null,
        sites: null,
        internalTravel: null,
        cityTravel: null,
        travelParty: null,
        budget: null,
        interests: [],
        entertainment: []
      }
    };
  }

  updateCurrentAnswer = (answer) => {
    let answers = {...this.state.userAnswers};
    let key = this.state.question;
    answers[key] = answer;
    this.setState( {answer});
    console.log(answers[key]);
  }

  render() {
    return (
      <section className="row quiz">
        <h1>{this.state.userAnswers.duration}</h1>
        <QuestionSideBar number={this.state.questionNumber} text={this.state.questionText} />
        <AnswerChoices updateCurrentAnswerCallback={this.updateCurrentAnswer} answers= {this.state.answers} picture={this.state.backgroundImage} />
    </section>
    );
  }
};

export default Quiz;
