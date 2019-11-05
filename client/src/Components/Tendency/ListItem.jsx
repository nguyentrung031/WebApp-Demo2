import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
class ListItem extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        <li className="media">
          <a href={`/Detail/${this.props.Id}`}>
            {
              this.props.Image ? (
                <img src={this.props.Image} className="mr-3 i1" alt={this.props.Name} />
              ) : (
                <Skeleton height={200}/>
              )
            }
          </a>
          <div className="media-body">
            <a href={`/Detail/${this.props.Id}`}>
              <h3 className="mt-0 mb-1">{this.props.Name || <Skeleton duration={2} count={1} width={600}/>}</h3>
            </a>
            <span>{this.props.Date || <Skeleton duration={2} count={1}/>}</span>
            <p>{this.props.Content || <Skeleton duration={2} count={2} width={100}/>}</p>
          </div>
        </li>
      </ul>
    );
  }
}

export default ListItem;