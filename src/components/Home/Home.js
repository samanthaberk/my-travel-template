import React, { Component } from "react";

import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import Backdrop from './Backdrop/Backdrop';

class Home extends Component {
  state = {
    sidebarOpen: false
  };

  sidebarToggleClickHandler = () => {
    this.setState((prevState)=>{
      return{sidebarOpen: !prevState.sidebarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Navbar sidebarClickHandler={this.sidebarToggleClickHandler} />
        <SideBar show={this.state.sidebarOpen} />
        { backdrop }
        <main style={{marginTop: '100px'}}>
          <p>Page Content Goes Here</p>
        </main>
      </div>
    );
  }
}

export default Home;
