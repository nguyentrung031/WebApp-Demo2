import React, { Component } from 'react';
import {Link} from "react-router-dom";

class HomeSlide extends Component {
  render() {
    return (
      <div className="card-item slide">
        <div className="img">
          <Link to={`/Detail/${this.props.id}`}>
            <img src={this.props.img} alt={this.props.name} />
          </Link>
        </div>
        <h6>{this.props.name}</h6>
      </div>
    );
  }
}

export default HomeSlide;