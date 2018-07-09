import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

import Home from '../components/Home/Home';
import PageOne from '../components/PageOne/PageOne';
import PageTwo from '../components/PageTwo/PageTwo';
import PageThree from '../components/PageThree/PageThree';


import './App.css';

class App extends Component {
    state = {
    }
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/question1" exact component={PageOne}/>
          <Route path="/question2" exact component={PageTwo}/>
          <Route path="/question3" exact component={PageThree}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
