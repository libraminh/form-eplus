new WOW().init();

$(function(){
  niceSelectFilter();
  activeCarousel();
  animateBtn();
  activeMenu();
  btnSearchClick();
})

function activeCarousel() {
  $('.carousel-1').owlCarousel({
    autoplay: true,
    items: 1,
    margin: 20,
    loop: true,
    nav: false,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          autoplay: false,
          items:1,
      },
      768:{
          autoplay: true,
          items:1,
      },
      1000:{
          autoplay: true,
          items:1,
      },
    }
  });

}

function animateBtn() {
  if($(window).width() > 1120) {
    setInterval(function(){
      $('#btn-search-1').addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated rubberBand');
      });
    }, 5000);

    setInterval(function(){
      $('#btn-search-2').addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated rubberBand');
      });
    }, 10000);
  }
}

function activeMenu() {
  $('.btn-nav').on('click', function(){
    $('.wrap-menu').toggleClass('open');
  })
}

function btnSearchClick() {
  $('#btn-search-1').on('click', function(){
    if($(window).width() > 1120) {
      $('.carousel-1').toggleClass('push-carousel');
    }

    $('.wrap-content').toggleClass('pull-content add-padding');

    $('.copyright').toggleClass('position-copyright');

    $('.slogan').toggleClass('slogan-gone');

    $('.home-wrap').toggleClass('abc');

  })
}
