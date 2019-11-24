import React, { Component } from 'react';
import {withRouter, Link, NavLink  } from "react-router-dom";
import { searchData } from '../../Store/Action/itemAction';
import { connect } from 'react-redux';
class Header extends Component {
  // xử lý hiệu ứng cuộn chuột Start
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
      thePosition: false,
      q: '',
      isTop: true,
    };
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
      if (window.scrollY > 170) {
        this.setState({ thePosition: true })
      } else {
        this.setState({ thePosition: false })
      }
    });
    window.scrollTo(0, 0);
  }
  onScrollStep = () => {
    if (window.pageYOffset === 0){
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  renderGoTopIcon = () => {
    if (this.state.thePosition){
      return (
        <div className="td-scroll-up" onClick={this.scrollToTop}>
          <i className="fas fa-angle-up" />
        </div>
      )
    }
  }
  // xử lý hiệu ứng cuộn chuột End
  onScroll(isTop) {
    this.setState({ isTop });
  }
  handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name] : value
    });
  }
  onClickSearch = (e) => {
    e.preventDefault();
    const newName = this.state.q;
    this.props.searchData(this.props.history, newName);
  }
  render() {
    return (
      <div>
        {this.renderGoTopIcon()}
        {/* header */}
        <header>
            {/* logo */}
          <div className="container">
            <div className="logo">
              <img src="/img/logo1.png" alt="logo_decor" />
            </div>
          </div>
            {/* end logo */}
            {/* navbar */}
          <div className="navbar-wrapper">
            <div className="container">
              <div style={{ top: 0 }}  className={this.state.isTop ? 'nav-body down' : 'nav-body up'}>
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink >
                      </li>
                      <li className="nav-item">
                        <NavLink to="/Tendency/" className="nav-link" activeClassName="active">XU HƯỚNG</NavLink >
                      </li>
                      <li className="nav-item">
                        <NavLink to="/Style/" className="nav-link" activeClassName="active">PHONG CÁCH</NavLink >
                      </li>
                      <li className="nav-item">
                        <NavLink to="/Space/" className="nav-link" activeClassName="active">KHÔNG GIAN</NavLink >
                      </li>
                      <li className="nav-item">
                        <NavLink to="/PengShui/" className="nav-link" activeClassName="active">PHONG THỦY</NavLink >
                      </li>
                      <li className="nav-item">
                        <NavLink to="/Tips/" className="nav-link" activeClassName="active">MẸO VẶT</NavLink >
                      </li>
                      <li className="nav-item">
                        <NavLink to="/Supplies/" className="nav-link" activeClassName="active">VẬT TƯ</NavLink >
                      </li>
                      <li className="nav-item">
                        <NavLink to="/StrangePoison/" className="nav-link" activeClassName="active">ĐỘC LẠ</NavLink >
                      </li>
                    </ul>
                  </div>
                  <div className="search-item">
                  <a href="/" id="search01" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                    <i className="fas fa-search" />
                  </a>
                    <div className="dropdow-search dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <form className="form-inline" onSubmit={this.onClickSearch}>
                        <input onChange={this.handleOnChange} className="form-control" name="q" type="search" placeholder="nhập từ khóa" aria-label="Search" />
                        <Link to={`/Search`}><button onClick={this.onClickSearch} className="btn btn-outline-success" type="submit">Tìm kiếm</button></Link>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* end navbar */}
      </header>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    List: state.List
  }
}
const mapDispatchToProps = {
  searchData
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));