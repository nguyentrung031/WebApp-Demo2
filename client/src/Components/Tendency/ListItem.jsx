import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        <li className="media">
          <a href={"/Detail/"+ this.props.Id}>
            <img src={this.props.Image}className="mr-3 i1" alt="..." />
          </a>
          <div className="media-body">
            <a href={"/Detail/"+ this.props.Id}><h3 className="mt-0 mb-1">{this.props.Name}</h3></a>
            <span>{this.props.Date}</span>
            <p>{this.props.Content}</p>
          </div>
        </li>
      </ul>
    );
  }
}

export default ListItem;