import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Quiz from '../components/Quiz/Quiz';
import PageOne from '../components/PageOne/PageOne';
import PageTwo from '../components/PageTwo/PageTwo';
import PageThree from '../components/PageThree/PageThree';


import './App.css';

class App extends Component {
    state = {
      duration: null,
      travelerType: null,
      pace: null,
      transport: [],
      content: {}
    }
  render() {

    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/quiz" exact component={Quiz}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
