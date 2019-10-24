// slide
$(document).ready(function () {
    $('.Card-body-01').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.td-next-prev-wrap .next'),
        prevArrow: $('.td-next-prev-wrap .prev')
    });
});
// hiệu ứng cuộn chuột
$(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
      //  console.log(pos_body);
      //  if(pos_body>500){
      //     $('.navbar-wrapper').addClass('co-dinh-menu');
      //  }
      //  else {
      //     $('.navbar-wrapper').removeClass('co-dinh-menu');
      //  }
       if(pos_body>800){
          $('.td-scroll-up').addClass('hien-ra');
       }
       else{
          $('.td-scroll-up').removeClass('hien-ra');
       }
    });
    $('.td-scroll-up').click((event) => {
       $('html,body').animate({scrollTop: 0},2480);
    });
   //  xử lý active navbar
   $('.navbar-nav .nav-item').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
  })
 });