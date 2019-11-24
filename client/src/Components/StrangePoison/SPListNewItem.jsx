import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SPListNewItem extends Component {
  render() {
    return (
      <div className="card-item">
        <div className="img-3">
          <Link to={`/Detail/${this.props.id}`}>
            <img src={this.props.img} alt={this.props.name} />
          </Link>
        </div> 
        <div className="Title-3">
          <small>Độc lạ</small>
          <h6>{this.props.name}</h6>
        </div>
      </div>
    );
  }
}

export default SPListNewItem;