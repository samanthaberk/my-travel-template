import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Quiz from '../components/Quiz/Quiz';
import Itinerary from '../components/Itinerary/Itinerary';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userAnswers: {}
    }
  }

  updateState = (userAnswers) => {
    this.setState ({
      userAnswers
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route path="/" exact component={Home}/>
          <Route path="/quiz"
          render={ (props) => <Quiz {...props} changeState={ this.updateState } />}
          />
          <Route path="/itinerary" exact
          render={ (props) => <Itinerary {...props} userAnswers={ this.state.userAnswers } />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
