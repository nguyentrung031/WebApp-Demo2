import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="td-scroll-up">
          <i className="fas fa-angle-up" />
        </div>
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
              <div className="nav-body">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Tendency/">XU HƯỚNG</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/PhongCach/">PHONG CÁCH</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/KhongGian/">KHÔNG GIAN</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/PhongThuy/">PHONG THỦY</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/MeoVat/">MẸO VẶT</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/VatTu/">VẬT TƯ</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/DocLa/">ĐỘC LẠ</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
                <div className="search-item">
                  <a href="#search" id="search01" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                    <i className="fas fa-search" />
                  </a>
                <div className="dropdow-search dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <form className="form-inline">
                    <input className="form-control" type="search" placeholder="nhập từ khóa" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">tìm kiếm</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* end navbar */}
      </header>
    </div>
    );
  }
}

export default Header;