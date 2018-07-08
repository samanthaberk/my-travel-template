import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home/Home';
import PageOne from '../components/PageOne';


class App extends Component {
    state = {
      display: "home"
    }
  render() {
    let current_output = "";
    if(this.state.display === "home") {
      current_output = < Home />
    }
    if (this.state.display === "pageOne") {
      current_output = < PageOne />
    }

    return (
      <div className="App">
        { current_output }
      </div>
    );
  }
}

export default App;
