import React, { Component } from "react";
import PropTypes from 'prop-types';

class City extends Component {
  render() {
    return(
      <div>
        <h3>Day {this.props.day}: {this.props.city}</h3>
      </div>
    );
  }
}

City.propTypes = {
  day: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired
};

export default City;
