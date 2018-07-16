import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Quiz from '../components/Quiz/Quiz';
import Itinerary from '../components/Itinerary/Itinerary'

import './App.css';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route path="/" exact component={Home}/>
          <Route path="/quiz" exact component={Quiz}/>
          <Route path="/itinerary" exact component={Itinerary}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
