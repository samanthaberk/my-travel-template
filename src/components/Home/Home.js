import React, { Component } from "react";

import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';
import Backdrop from './Backdrop/Backdrop';
import Jumbotron from './Jumbotron/Jumbotron';
import About from './About/About';
import Features from './Features/Features';
import Footer from './Footer/Footer';

class Home extends Component {
  state = {
    sidebarOpen: false,
    isTop: true
  };

  sidebarToggleClickHandler = () => {
    this.setState((prevState)=>{
      return{sidebarOpen: !prevState.sidebarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false});
    return{sidebarOpen: !this.state.sidebarOpen};
  };


  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Navbar sidebarClickHandler={this.sidebarToggleClickHandler} />
        <SideBar show={this.state.sidebarOpen} click={this.backdropClickHandler}/>
        { backdrop }
        <main>
          <Jumbotron />
          <About />
          <Features />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
