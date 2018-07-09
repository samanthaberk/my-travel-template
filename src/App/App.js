import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import PageOne from '../components/PageOne/PageOne';
import PageTwo from '../components/PageTwo/PageTwo';

import './App.css';

class App extends Component {
    state = {
      display: "questionOne"
    }
  render() {
    let current_output = "";
    if(this.state.display === "home") {
      current_output = <Route path="/" exact render={() => <Home />} />
    }
    if (this.state.display === "questionOne") {
      current_output = <Route path="/question1" exact render={() => <PageOne />} />
    }
    if (this.state.display === "questionTwo") {
      current_output = <Route path="/question2" exact render={() => <PageTwo />} />
    }

    return (
      <BrowserRouter>
        <div className="App">
          { current_output }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
