// hiệu ứng cuộn chuột
$(document).ready(function() {
   $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();
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