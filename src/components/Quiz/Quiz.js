import React, { Component } from "react";

import data from './Data';
import QuestionSideBar from './QuestionSideBar';
import AnswerChoices from './AnswerChoices';

import './Quiz.css'

class Quiz extends Component {

    state = {
      number: 1,
      question: data.questions[0].text,
      answerFormat: data.questions[0].answerFormat,
      answerChoices: data.questions[0].answerChoices,
      image: data.questions[0].image,
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
    };

  updateCurrentAnswer = (answer) => {
    this.setState( {duration: answer});
  }

  render() {
    return (
      <section className="row quiz">
        <QuestionSideBar number={this.state.number} text={this.state.question} />
        <AnswerChoices format={this.state.answerFormat} answers= {this.state.answerChoices} image={this.state.image} />
    </section>
    );
  }
};

export default Quiz;
