import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {getData_supplies_sortdesc, getData_supplies_popalar_sort} from '../../Store/Action/supplies_action';
import SuppliesLisItem from './SuppliesLisItem';
import SuppliesListNewItem from './SuppliesListNewItem';
class Supplies extends Component {
  static propTypes = {
    List: PropTypes.object.isRequired,
  };
  onClickNewSort = () => {
    this.props.getData_supplies_sortdesc();
  }
  onClickPopalarSort = () =>{
    this.props.getData_supplies_popalar_sort();
  } 
  render() {
    const {itemsSupplies} = this.props.Supplies;
    return (
      <main>
        <div className="container bread-wrapper">
          <nav className="bread" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Vật tư</li>
            </ol>
          </nav>
          <div className="title-wrap">
            <div className="title-wrap-content">
              <h2>Vật tư</h2>
            </div>
            <div className="title-wrap-item">
              <div className="wrap-item" id="dropdownMenuButton" data-toggle="dropdown">
                <small className="dropdown-toggle">Mặc định <i className="fas fa-angle-down pr-2" /></small>
              </div>
              <ul className="wrap-drop dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="wrap-drop-item">
                  <Link to="/Supplies/" onClick={this.onClickNewSort}>Mới nhất</Link>
                </li>
                <li className="wrap-drop-item">
                  <Link to="/Supplies/" onClick={this.onClickPopalarSort}>Xem nhiều theo tuần</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* section1 mới */}
        <section className="new">
          <div className="container">
            <div className="row Content-new">
              {
                itemsSupplies.map((value, key) => {
                  if(value.id === 8){
                    return (
                      <div className="col-md-6 i1" key={key}>
                        <div className="img-1">
                          <Link to={`/Detail/${value.id}`}>
                            <img src={value.img} alt={value.name} />
                          </Link>
                        </div> 
                        <div className="Title-1">
                          <small>Vật tư</small>
                          <h3>{value.name} </h3>
                          <span>{value.date}</span>
                        </div>
                      </div>
                    )
                  }
                  else{
                    return null;
                  }
                })
              }
              <div className="col-md-6 i2">
                <div className="card-2">
                 {
                   itemsSupplies.map((value, key) => {
                     if(value.id >= 7){
                       return <SuppliesListNewItem {...value} key={key}/>
                     }
                     else{
                      return null;
                     }
                   })
                 }                    
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section1 mới */}
        {/* Tin tức */}
        <section className="xuhuong">
          <div className="container">
            {
             itemsSupplies.map((value, key) => 
              <SuppliesLisItem {...value} key={key}/>
              )
            }
            <nav aria-label="Page navigation example">
              <ul className="pagination" id="navi-01">
                <li className="page-item next">
                  <Link className="page-link" to="/" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </Link>
                </li>
                <li className="page-item page-01 naviactive"><Link className="page-link" to="/">1</Link></li>
                <li className="page-item page-01"><Link className="page-link" to="/">2</Link></li>
                <li className="page-item page-01"><Link className="page-link" to="/">3</Link></li>
                <li className="page-item">
                  <Link className="page-link next" to="/" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    List: state.List,
    Supplies: state.Supplies
  }
}
const mapDispatchToProps = {
  getData_supplies_sortdesc, 
  getData_supplies_popalar_sort
}
export default connect(mapStateToProps, mapDispatchToProps)(Supplies);