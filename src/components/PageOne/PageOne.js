import React, { Component } from "react";
import QuestionSideBar from '../QuizComponents/QuestionSideBar';

import './PageOne.css'

class PageOne extends Component {
  state = {
    questionNum: "1",
    questionText: "HOW LONG IS YOUR TRIP?"
  }

  render() {
    return (
      <section className="page-one row">
        
        <QuestionSideBar question={this.state.questionNum} text={this.state.questionText}/>

          <div className="col s8 quiz-page-content">

            <div className="row">
              <div className="col s12 m6 l6 pg1-questions">
                <p className="pg1-questions">
                  <label>
                    <input type="checkbox" />
                    <span>1 Week</span>
                  </label>
                </p>
              </div>

              <div className="col s12 m6 l6">
                <p className="pg1-questions">
                  <label>
                    <input type="checkbox" />
                    <span>2 Weeks</span>
                  </label>
                </p>
              </div>

            </div>

            <div className="row">
              <div className="col s12 m6 l6">
                <p className="pg1-questions">
                  <label>
                    <input type="checkbox" />
                    <span>3 Weeks</span>
                  </label>
                </p>
              </div>

              <div className="col s12 m6 l6">
                <p className="pg1-questions">
                  <label>
                    <input type="checkbox" />
                    <span>4 Weeks</span>
                  </label>
                </p>
              </div>

            </div>


          </div>
      </section>
    )
  }
}

export default PageOne;
