import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
class ListNewItem extends Component {
  render() {
    return (
      <div className="card-item">
        <div className="img-3">
          <a href={`/Detail/${this.props.Id}`}>
            {
              this.props.Image ? (
                <img src={this.props.Image} alt={this.props.Name} />
              ) : (
                <Skeleton height={200}/>
              )
            }
          </a>
        </div> 
        <div className="Title-3">
          <small>{"Xu Hướng" || <Skeleton/>}</small>
          <h6>{this.props.Name || <Skeleton duration={2} count={2} width={100}/>}</h6>
        </div>
      </div>
    );
  }
}

export default ListNewItem;