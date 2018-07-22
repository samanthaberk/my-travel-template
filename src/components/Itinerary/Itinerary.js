import React, { Component } from "react";
import axios from 'axios';

import City from './City';
import Activity from './Activity';

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: null,
      activities: []
    };
  }

  updateActivities = (id) => {
    const activityList = [...this.state.activities, id];
    this.setState({
      activities: activityList
    }
  }

  componentDidMount = () => {
    const {duration, travelerType, pace} = this.props.userAnswers;
    const transport = this.props.userAnswers.internalTravel.sort().join(', ');
    const TEMPLATES_URL = `http://localhost:8080/templates/duration/${duration}/travelers/${travelerType}/pace/${pace}/transport/${transport}`;
    axios.get(TEMPLATES_URL)
      .then(response => {
        this.setState({
          template: response.data[0].content
        });
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  render() {
    let cities;
    if (this.state.template === null) {
      cities = <div><h3>Loading...</h3></div>;
    } else {
      let data = this.state.template.split(", ");
      cities = data.map((city, index) => {
        return (
          <section>

            <City
              key={index}
              day={index + 1}
              city={city}
            />
            <Activity
              key={`${city}${index}`}
              day={index + 1}
              lastDay={data.length}
              city={city}
              userAnswers={this.props.userAnswers}
              updateActivityState={this.updateActivities}
              activityList={this.state.activities.join(', ')}
            />
          </section>
        )
      });
    }


    return (
      <div>
        {/* Navbar */}


        <div className="row">

          <div className="col s3">
            <h3>Destination <span>China</span></h3>
            <p><span>欢迎</span>, welcome to China!</p>

          </div>

          <div className="col s9">
            <h3>{cities}</h3>
          </div>

        </div>

      </div>
    );
  }
}

export default Itinerary;
