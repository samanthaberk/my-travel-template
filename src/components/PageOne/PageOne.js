import React, { Component } from "react";

import './PageOne.css'

class PageOne extends Component {
  render() {
    return (
      <section className="page-one row">
          <div className="col s4 quiz-side-panel">
            <div className="questions-container">
              <h3>Question 1/10</h3>
              <h5>HOW LONG IS YOUR TRIP?</h5>
            </div>
          </div>

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
