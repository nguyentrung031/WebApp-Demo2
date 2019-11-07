import React, { Component } from 'react';
class TendencyListItem extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        <li className="media">
          <a href={`/Detail/${this.props.id}`}>
            <img src={this.props.img} className="mr-3 i1" alt={this.props.name} />
          </a>
          <div className="media-body">
            <a href={`/Detail/${this.props.id}`}>
              <h3 className="mt-0 mb-1">{this.props.name}</h3>
            </a>
            <span>{this.props.date}</span>
            <p>{this.props.content}</p>
          </div>
        </li>
      </ul>
    );
  }
}

export default TendencyListItem;