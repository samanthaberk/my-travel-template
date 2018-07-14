import React, { Component } from "react";

import data from './Data';
import QuestionSideBar from './QuestionSideBar';
import AnswerChoices from './AnswerChoices';

import './Quiz.css'

class Quiz extends Component {
    state = {
      number: 1,
      tag: data.questions[0].tag,
      question: data.questions[0].text,
      answerFormat: data.questions[0].answerFormat,
      answerChoices: data.questions[0].answerChoices,
      image: 1,
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

  updateCurrentPage = () => {
    if (this.state.number <= 10) {
      const number = this.state.number + 1;
      const image = this.state.image + 1;
      const tag = data.questions[number-1].tag;
      const question = data.questions[number-1].text;
      const answerFormat = data.questions[number-1].answerFormat;
      const answerChoices = data.questions[number-1].answerChoices;

      this.setState({
        number: number,
        image: image,
        tag: tag,
        question: question,
        answerFormat: answerFormat,
        answerChoices: answerChoices,
      });
    }

  }

  updateCurrentAnswer = (answer) => {
    const tag = this.state.tag;
    console.log(tag);
    console.log(answer);
    this.setState({tag: answer});
  }

  render() {
    return (
      <section className="row quiz">
        <QuestionSideBar number={this.state.number} text={this.state.question} />
        <AnswerChoices nextPageCallback={this.updateCurrentPage} onAnswerSelect={this.updateCurrentAnswer} format={this.state.answerFormat} answers= {this.state.answerChoices} image={this.state.image} />
    </section>
    );
  }
};

export default Quiz;
