import React, { Component } from 'react';

class SuppliesListNewItem extends Component {
  render() {
    return (
      <div className="card-item">
        <div className="img-3">
          <a href={`/Detail/${this.props.id}`}>
            <img src={this.props.img} alt={this.props.name} />
          </a>
        </div> 
        <div className="Title-3">
          <small>Vật tư</small>
          <h6>{this.props.name}</h6>
        </div>
      </div>
    );
  }
}

export default SuppliesListNewItem;