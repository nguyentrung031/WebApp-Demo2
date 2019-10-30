import React, { Component } from 'react';

class NewRelatedTo extends Component {
  render() {
    return (
      <div className="card-item">
        <div className="img">
          <a href={"/Detail/"+ this.props.Id}>
            <img src={this.props.Image} alt="" />
          </a>
        </div>
        <h6>{this.props.Name}</h6>
    </div>
    );
  }
}

export default NewRelatedTo;