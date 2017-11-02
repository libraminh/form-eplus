new WOW().init();

$(function(){
  niceSelectFilter();
  activeCarousel();
  setInterval(function(){
    $('#btn-search-1').addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animated tada');
    });
  }, 5000);

  setInterval(function(){
    $('#btn-search-2').addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animated tada');
    });
  }, 10000);

  $('.btn-nav').on('click', function(){
    $('.wrap-menu').toggleClass('open');
  })

  $('#btn-search-1').on('click', function(){
    $('.carousel-1').toggleClass('push-carousel');

    $('.wrap-content').toggleClass('pull-content');

    // $('.wrap-toggle').toggleClass('open-toogle');
  })
})

function activeCarousel() {
  $('.carousel-1').owlCarousel({
    autoplay: false,
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  });
}
