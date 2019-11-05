import React, { Component } from 'react';

class TendencyListNewItem extends Component {
  render() {
    return (
      <div className="card-item">
        <div className="img-3">
          <a href={`/Detail/${this.props.Id}`}>
            <img src={this.props.Image} alt={this.props.Name} />
          </a>
        </div> 
        <div className="Title-3">
          <small>{"Xu Hướng"}</small>
          <h6>{this.props.Name}</h6>
        </div>
      </div>
    );
  }
}

export default TendencyListNewItem;