import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import HomeSlide from './HomeSlide';
import { addEmail } from '../../Store/Action/email_action'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:''
    }
  }
  componentDidMount(){
    this.props.addEmail();
  };
  onchange = e =>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name] : value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      email: this.state.email
    };
    this.props.addEmail(newItem);
    alert('Thông tin bạn đã được gửi thành công!');
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      lazyLoad: true
    };
    const {itemsTips} = this.props.Tips;
    const {itemsTendency} = this.props.Tendency;
    const {itemsStyle} = this.props.Style;
    const {itemsPengShui} = this.props.PengShui;
    return (
      <main>
        {/* section1 mới */}
        <section className="new">
          <div className="container">
            <div className="Title-new">
              <h6>new</h6>
              <div className="Title-slide">
                <Link to="detail.html"><p>Tốp 5 thiết kế nội thất đẹp nhất!</p></Link>
              </div>
            </div>
            <div className="row Content-new">
              {
                itemsStyle.map((value,key) => {
                  if(value.id === 8){
                    return (
                      <div className="col-md-6 i1" key={key}>
                        <div className="img-1 i1">
                          <Link to={`/Detail/${value.id}`}>
                            <img src={value.img} alt="i1" />
                          </Link>
                        </div> 
                        <div className="Title-1">
                          <small>Độc lạ</small>
                          <Link to={`/Detail/${value.id}`}><h3>{value.name}</h3></Link>
                          <span>{value.date}</span>
                        </div>
                      </div>
                    )
                  }
                  else return null
                })
              }
              <div className="col-md-6 i2">
                <div className="card-1">
                  <div className="img-2">
                    <Link to='/'>
                      <img src="./img/i2.jpg" alt="i1" />
                    </Link>
                  </div> 
                  <div className="Title-2">
                    <small>Độc lạ</small>
                    <h3>5 thiết kế nội thất đơn giản!</h3>
                  </div>
                </div>
                <div className="card-2">
                  {
                    itemsStyle.map((value,key) => {
                      if(value.id <= 2){
                        return (
                          <div className="card-item" key={key}>
                            <div className="img-3">
                              <Link to={`/Detail/${value.id}`}>
                                <img src={value.img} alt={value.name} />
                              </Link>
                            </div> 
                            <div className="Title-3">
                              <small>Độc lạ</small>
                              <h6>{value.name}</h6>
                            </div>
                          </div>
                        )
                      }
                      else return null;
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section1 mới */}
        {/* section2 xu hương */}
        <section className="xuhuong">
          <div className="container">
            <div className="Title-wrap">
              <h6>XU HƯỚNG MỚI NHẤT</h6>
              <nav>
                <ul>
                  <li className="T-item">
                    <Link to="/">Xem thêm</Link>
                  </li>
                  <li className="T-item">
                    <Link to="/">Độc lạ</Link>
                  </li>
                  <li className="T-item">
                    <Link to="/">Không gian</Link>
                  </li>
                  <li className="T-item">
                    <Link to="/">Mẹo vặt</Link>
                  </li>
                  <li className="T-item">
                    <Link to="/">Nhiều hơn <i className="fas fa-angle-down pr-2x" /></Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row xh-content">
              {
                itemsTendency.map((value,key) => {
                  if(value.id <= 2){
                    return (
                      <div className="col-md-4" key={key}>
                        <div className="img">
                          <Link to={`/Detail/${value.id}`}>
                            <img src={value.img} alt={value.name} />
                          </Link>
                        </div>
                        <div className="content-item">
                          <Link to={`/Detail/${value.id}`}>
                            <h5>{value.name}</h5>
                          </Link>
                          <span>{value.date}</span>
                          <p>{value.content}</p>
                        </div>
                      </div>
                    )
                  }
                  else return null;
                })
              }
              <div className="col-md-4">
                {
                  itemsTendency.map((value,key) => {
                    if(value.id <= 4){
                      return (
                        <div className="media" key={key}>
                          <Link to={`/Detail/${value.id}`}><img src={value.img} className="mr-3" alt={value.name} /></Link>
                          <div className="media-body">
                            <Link to={`/Detail/${value.id}`}><h5 className="mt-0">{value.name}</h5></Link>
                            <span>{value.date}</span>
                          </div>
                        </div>
                      )
                    }
                    else return null;
                  })
                }
              </div>
            </div>
          </div>
        </section>
        {/* end section2 xu hương */}
        {/* section 4 doc la */}
        <section className="docla">
          <div className="container">
            <div className="Title">
              <small>ĐỘC LẠ</small>
            </div>
            <Slider {...settings}>
            {
              itemsTips.map((value,key) => {
                if(value.id <= 6){
                  return (
                    <HomeSlide {...value} key={key}/>
                  )
                }
                else return null;
              })
            }
            </Slider>
          </div>
        </section>
        {/* end section 4 doc la */}
        {/* section 5 vat tu */}
        <section className="vattu">
          <div className="container">
            <div className="row">
              <div className="col-md-4 connect-face">
                <div className="Title">
                  <small>KẾT NỐI VỚI CHÚNG TÔI</small>
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input onChange={this.onchange} type="text" className="form-control" name="email" placeholder="nhập Email"/>
                  <button onClick={(e) =>this.onSubmit(e)} type="submit" className="btn btn-dark" required="">send</button>
                </div>
              </div>
              <div className="col-md-8 vattu-body">
                <div className="Title">
                  <small>VẬT TƯ</small>
                </div>
                <div className="vattu-wrap">
                  {
                    itemsPengShui.map((value,key) => {
                      if(value.id === 1){
                        return (
                          <div className="vattu-item-one" key={key}>
                            <div className="img">
                              <Link to={`/Detail/${value.id}`}>
                                <img src={value.img} alt={value.img} />
                              </Link>
                            </div>
                            <div className="content-item">
                              <h5>{value.name}</h5>
                              <span>{value.date}</span>
                              <p>{value.content}</p>
                            </div>
                          </div>
                        )
                      }
                      else return null;
                    })
                  }
                  <div className="vattu-item-tow">
                    {
                      itemsPengShui.map((value,key) => {
                        if(value.id <= 4){
                          return (
                            <div className="media" key={key}>
                              <Link to={`/Detail/${value.id}`}>
                                <img src={value.img} className="mr-3" alt={value.name} />
                              </Link>
                              <div className="media-body">
                                <Link to={`/Detail/${value.id}`}>
                                  <h5 className="mt-0">{value.name}</h5>
                                </Link>
                                <span>{value.date}</span>
                              </div>
                            </div>
                          )
                        }
                        else return null;
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section 5 vat tu */}
      </main>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Tips: state.Tips,
    Tendency: state.Tendency,
    Style: state.Style,
    PengShui: state.PengShui,
  }
}
const mapDispatchToProps = {
  addEmail
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);