import React, { Component } from 'react';
import {Link} from "react-router-dom";

class TipsListItem extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        <li className="media">
          <Link to={`/Detail/${this.props.id}`}>
            <img src={this.props.img} className="mr-3 i1" alt={this.props.name} />
          </Link>
          <div className="media-body">
            <Link to={`/Detail/${this.props.id}`}>
              <h3 className="mt-0 mb-1">{this.props.name}</h3>
            </Link>
            <span>{this.props.date}</span>
            <p>{this.props.content}</p>
          </div>
        </li>
      </ul>
    );
  }
}

export default TipsListItem;