document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById('search01');
    const fromDrop = document.querySelector('.dropdow-search');
    // click moi nhat
    const wrap = document.querySelector('.wrap-item');
    const drop = document.querySelector('.wrap-drop');
    // click nav
    // const navli = document.getElementsByClassName('nav-item');
    // console.log(navli[1]);
    // navli[1].onclick(() => {
    //     this.classList.toggle('test');
    // })
    // wrap.addEventListener('click', ()=>{
    //     drop.classList.toggle('tg-01');
    // })
    search.addEventListener('click', ()=>{
        fromDrop.classList.toggle('ds-01');
    });
    // // click moi nhat

    //  nếu click ra ngoài các button thì ẩn tất cả các menu con
//      window.addEventListener("click", function(){
//         if (!event.target.matches('wrap-drop')){
//         drop.classList.remove('tg-01');
//         }
//    });
    // click active  navigation
    // var header = document.getElementById("navi-01");
    // var btns = header.getElementsByClassName("page-01");
    // for (var i = 0; i < btns.length; i++) {
    // btns[i].addEventListener("click", function() {
    // var current = document.getElementsByClassName("naviactive");
    // current[0].className = current[0].className.replace("naviactive", "");
    // this.className += " naviactive";
    // });
    // }
}, false)
