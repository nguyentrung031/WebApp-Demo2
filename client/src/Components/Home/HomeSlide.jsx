import React, { Component } from 'react';

class HomeSlide extends Component {
  render() {
    return (
      <div className="card-item">
        <div className="img">
          <a href={`/Detail/${this.props.id}`}>
            <img src={this.props.img} alt={this.props.name} />
          </a>
        </div>
        <h6>{this.props.name}</h6>
      </div>
    );
  }
}

export default HomeSlide;