import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SpaceListNewItem from './SpaceListNewItem';
import SpaceListItem from './SpaceListItem';
class Space extends Component {
  static propTypes = {
    List: PropTypes.object.isRequired,
  };
  render() {
    const {itemsSpace} = this.props.List;
    return (
      <main>
        <div className="container bread-wrapper">
          <nav className="bread" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Không gian</li>
            </ol>
          </nav>
          <div className="title-wrap">
            <div className="title-wrap-content">
              <h2>Không gian</h2>
            </div>
            <div className="title-wrap-item">
              <div className="wrap-item" id="dropdownMenuButton" data-toggle="dropdown">
                <small className="dropdown-toggle">Mới nhất <i className="fas fa-angle-down pr-2" /></small>
              </div>
              <ul className="wrap-drop dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className="wrap-drop-item">
                  <a href="/">Mới nhất</a>
                </li>
                <li className="wrap-drop-item">
                  <a href="/">Tin tiêu biểu</a>
                </li>
                <li className="wrap-drop-item">
                  <a href="/">Phổ biến nhất</a>
                </li>
                <li className="wrap-drop-item">
                  <a href="/">Xem nhiều theo tuần</a>
                </li>
                <li className="wrap-drop-item">
                  <a href="/">Ngẫu nhiên</a>
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
                itemsSpace.map((value,key) => {
                  if(value.id === 8){
                    return (
                      <div className="col-md-6 i1" key={key}>
                        <div className="img-1">
                          <a href={`/Detail/${value.id}`}>
                            <img src={value.img} alt={value.name} />
                          </a>
                        </div> 
                        <div className="Title-1">
                          <small>Không gian</small>
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
                  itemsSpace.map((value,key) => {
                    if(value.id >= 7){
                      return <SpaceListNewItem {...value} key={key}/>
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
            itemsSpace.map((value,key) => 
              <SpaceListItem {...value} key={key}/>
              )
            }
            <nav aria-label="Page navigation example">
              <ul className="pagination" id="navi-01">
                <li className="page-item next">
                  <a className="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item page-01 naviactive"><a className="page-link" href="/">1</a></li>
                <li className="page-item page-01"><a className="page-link" href="/">2</a></li>
                <li className="page-item page-01"><a className="page-link" href="/">3</a></li>
                <li className="page-item">
                  <a className="page-link next" href="/" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
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
    List: state.List
  }
}
export default connect(mapStateToProps)(Space);