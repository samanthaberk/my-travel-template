import React, { Component } from "react";
import PropTypes from 'prop-types';
import ActivityDetails from './ActivityDetails';

class Activity extends Component {

  render() {
    let city = this.props.city;

    if(this.props.day === 0) {
      return (
        <div>
          <ActivityDetails content={this.props.content} />
        </div>
      );

    } else if (this.props.day === this.props.lastDay) {
      return (
        <div>
            <ActivityDetails content={this.props.content} />
        </div>
      );
    } else {
      return(
        <section>
          <div>
            <ActivityDetails content={this.props.content} />
          </div>

          <div>
            <ActivityDetails content={this.props.content} />
          </div>

          <div>
            <ActivityDetails content={this.props.content} />
          </div>

        </section>
      );
    }
  }
}

export default Activity;
