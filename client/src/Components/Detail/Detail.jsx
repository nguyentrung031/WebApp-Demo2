import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetail } from '../../Store/Action/itemAction';
class Detail extends Component {
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
  render() {
    const {itemsDetail} = this.props.List;
    return (
      <main>
        <div className="container bread-wrapper">
          <nav className="bread" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/Tendency/">Độc lạ</a></li>
              <li className="breadcrumb-item active" aria-current="page">{itemsDetail.name}</li>
            </ol>
          </nav>
        </div>
        {/* Detail */}
        <section className="dettail-wrapper">
          <div className="container">
            <div className="detail-title">
              <div className="header-title">
                <h1 className="entry-title">{itemsDetail.name}</h1>
                <div className="td-module-meta-info">
                  <span className="td-post-date td-post-date-no-dot">
                    <span className="date-time">{itemsDetail.date}</span>
                  </span>
                  <div className="td-post-views">
                    <i className="fas fa-eye" />
                    <span className="td-nr-views-4134">567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="td-post-sharing-top">
              <div className="td-post-sharing-visible">
                <div className="td-social-handler ">
                  <div className="td-icon-share">
                    <i className="fas fa-share-alt" />
                  </div>
                  <div className="td-social-but-text">
                    Share
                  </div>
                </div>
                <a href="/" className="td-icon">
                  <div className="td-but-icon">
                    <i className="fab fa-facebook-f" />
                  </div>
                </a>
                <a href="/" className="td-icon">
                  <div className="td-but-icon td-1">
                    <i className="fab fa-twitter" />
                  </div>
                </a>
                <a href="/" className="td-icon">
                  <div className="td-but-icon td-2">
                    <i className="fab fa-google-plus-g" />
                  </div>
                </a>
                <a href="/" className="td-icon">
                  <div className="td-but-icon td-3">
                    <i className="fab fa-pinterest" />
                  </div>
                </a>
              </div>
            </div>
            <div className="detail-content">
              <p>
                <strong>Khi thiết kế nội thất phòng khách nhỏ gọn, hãy lưu ý những nguyên tắc như luôn thiết kế nội thất nhỏ gọn, lựa chọn màu sắc và bố trí ánh sáng hợp lý,… sẽ giúp “ăn gian” được diện tích.</strong>
              </p>
              <p>
                Phòng khách là trung tâm của một ngôi nhà, không chỉ là nơi đón tiếp khách mà còn thể hiện được vẻ đẹp cũng như phong cách mà gia chủ đã định hình cho căn nhà. Cũng chính bởi vậy mà việc <strong>thiết kế nội thất phòng khách nhỏ gọn</strong> luôn được các gia đình chú trọng, dành nhiều tâm huyết cũng như kinh phí đầu tư.
              </p>
              <p>
                <img className="detail-img" src="/img/de1.jpg" alt="" />
              </p>
              <p>
                <strong>Xem thêm:</strong>
                <a href="/">5 thiết kế nội thất phòng ngủ đơn giản</a>
              </p>
              <h2>
                <strong>Sử dụng cửa kính, giấy dán tường và các bức tranh treo tường</strong>
              </h2>
              <p>
                Một trong những điểm tạo ra nét riêng cho phòng khách của bạn đó chính là giấy dán tường và các bức tranh treo tường. Bởi vì, phòng khách có diện tích nhỏ dễ khiến cho bạn cảm thấy ngột ngạt, bí bách. Tạo nên một tiêu điểm, tăng cường ánh sáng và chiều sâu bằng cách dán giấy dán tường, một ô cửa kính rộng.
              </p>
              <p>
                <img className="detail-img" src="/img/de2.jpg" alt="" />
              </p>
              <p>
                Bên cạnh đó, bạn có thể trang trí phòng khách bằng các bức tranh treo tường với gam màu đậm trong phòng khách nhà bạn sẽ thu hút sự chú ý của mọi người tập trung vào nó và… quên đi vấn đề về diện tích và hình dáng của phòng khách nhà bạn và nó sẽ giúp làm tăng thêm mức ảnh hưởng của tác phẩm nghệ thuật cho không gian nhà bạn.
              </p>
              <h2>
                <strong>Sử dụng rèm cao kịch trần trong phòng khách</strong>
              </h2>
              <p>
                Trong không gian phòng khách của bạn có nhiều cửa sổ, bạn có thể thêm vài chiếc rèm cửa sổ kịch trần được trang trí bằng những họa tiết kẻ sọc sẽ mang lại cảm giác rộng rãi và cao cho nhà bạn hơn rất nhiều. Đó là cách đánh lừa thị giác mà nhiều nhà thiết kế đã áp dụng cho các căn hộ cho khách hàng của họ.
              </p>
              <p>
                <img className="detail-img" src="/img/de3.jpg" alt="" />
              </p>
              <h2>
                <strong>Tăng chiều sâu cho phòng khách bằng cách trang trí cây xanh</strong>
              </h2>
              <p>
                Giống như giấy dán tường và gương, cây xanh cũng là cách tuyệt vời để tăng chiều sâu cho căn phòng. Vị trí thích hợp nhất để đặt cây xanh chính là ở góc nhà, bên cạnh hoặc phía sau ghế sofa.
              </p>
              <p>
                <img className="detail-img" src="/img/de4.jpg" alt="" />
              </p>
              <h2>
                <strong>Thiết kế tường phòng khách bằng những giá sách</strong>
              </h2>
              <p>
                Một trong những cách tốt nhất để tối đa hóa không gian trong phòng khách nhỏ đó là thiết kế tường trong phòng khách bằng những giá sách nhằm mang lại điểm nhấn cho căn phòng và giải phóng không gian ở những nơi khác trong phòng.
              </p>
              <p>
                <img className="detail-img" src="/img/de5.jpg" alt="" />
              </p>
              <h2>
                <strong>Sử dụng tông màu sơn sáng cho phòng khách</strong>
              </h2>
              <p>
                Màu sơn sáng sẽ làm cho không gian phòng khách trở nên dụi, tươi mát và thoáng đãng hơn. Bạn có thể chọn những gam màu sáng như trắng, xanh nhạt khi thiết kế nội thất cho phòng khách nhỏ. Với những sắc màu tươi sáng, bạn sẽ có một phong khách trẻ trung, hiện đại, thể hiện phong cách của mình.
              </p>
              <p>
                <img className="detail-img" src="/img/he6.jpg" alt="" />
              </p>
              <p>
                Bạn có thể sử dụng bóng đèn, thủy tinh hay những tấm gương sẽ giúp tạo ra một hình ảnh không gian tươi sáng và tươi mới, nhẹ nhàng tạo cảm giác rộng mở cho không gian căn phòng lớn hơn.
              </p>
            </div>
            <hr />
            <div className="td-post-sharing-top td-top-01">
              <div className="td-post-sharing-visible">
                <div className="td-social-handler ">
                  <div className="td-icon-share">
                    <i className="fas fa-share-alt" />
                  </div>
                  <div className="td-social-but-text">
                    Share
                  </div>
                </div>
                <a href="/" className="td-icon">
                  <div className="td-but-icon">
                    <i className="fab fa-facebook-f" />
                  </div>
                </a>
                <a href="/" className="td-icon">
                  <div className="td-but-icon td-1">
                    <i className="fab fa-twitter" />
                  </div>
                </a>
                <a href="/" className="td-icon">
                  <div className="td-but-icon td-2">
                    <i className="fab fa-google-plus-g" />
                  </div>
                </a>
                <a href="/" className="td-icon">
                  <div className="td-but-icon td-3">
                    <i className="fab fa-pinterest" />
                  </div>
                </a>
              </div>
            </div>
            <hr />
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
const mapDispatchToProps = {
  getDetail
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);