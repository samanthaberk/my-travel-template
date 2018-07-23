import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home/Home';
import Quiz from '../components/Quiz/Quiz';
import Itinerary from '../components/Itinerary/Itinerary';
import NotFound from '../components/NotFound/NotFound';

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
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/quiz"
          render={ (props) => <Quiz {...props} changeState={ this.updateState } />}
          />
          <Route path="/itinerary" exact
          render={ (props) => <Itinerary {...props} userAnswers={ this.state.userAnswers } />}
          />
          <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
