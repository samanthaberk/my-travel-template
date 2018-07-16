import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
      userAnswers : {
        duration: null,
        travelerType: null,
        pace: null,
        sites: null,
        internalTravel: [],
        cityTravel: [],
        travelParty: null,
        budget: null,
        interests: [],
        entertainment: []
      }
    };

  updateCurrentPage = () => {
    if (this.state.number < 10) {
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

  updateMultipleAnswers = (answer) => {
    const oldState = this.state.userAnswers[this.state.tag];
    const updatedState = answer;
    const updatedUserAnswers = {
      ...this.state.userAnswers
    };
    updatedUserAnswers[this.state.tag].push(updatedState);
    this.setState( { userAnswers: updatedUserAnswers } );
  }

  updateCurrentAnswer = (answer) => {
    const oldState = this.state.userAnswers[this.state.tag];
    const updatedState = answer;
    const updatedUserAnswers = {
      ...this.state.userAnswers
    };
    updatedUserAnswers[this.state.tag] = updatedState;
    this.setState( { userAnswers: updatedUserAnswers } );
  }

  onBtnClick = () => {
    this.props.changeState(this.state.userAnswers);
  }

  render() {

    let button = null;

    if (this.state.number < 10) {
      button = (
        <a className="btn-floating" onClick={this.updateCurrentPage}>
          <i className="material-icons">play_arrow</i>
        </a>
      );
    } else {

      button = (
        <Link to={{
            pathname: "/itinerary",

        }} onClick={this.onBtnClick}>

          <button className="btn waves-effect waves-light">
            Go To Your Itinerary
          </button>
        </Link>
      );
    }

    return (
        <section className="row quiz">
          <QuestionSideBar number={this.state.number} text={this.state.question} />
          <AnswerChoices onCheckboxSelect={this.updateMultipleAnswers} onAnswerSelect={this.updateCurrentAnswer} format={this.state.answerFormat} answers= {this.state.answerChoices} image={this.state.image} />
          {button}
        </section>
    );
  }
};

export default Quiz;
