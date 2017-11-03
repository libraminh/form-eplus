new WOW().init();

$(function(){
  niceSelectFilter();
  // activeCarousel();
  animateBtn();
  activeMenu();
  btnSearchClick();
  doStuffInUserAgent();
  lightSearch();

  // $('.wrap-content .wrap-form .form-control').on('focusin', function(){
  //   $('.wrap-form').css({
  //     'transform' : 'scale(1.1)'
  //   });
  // })


  // $('.wrap-content').focus(function(){
  //   $('.wrap-form').css({
  //     'transform' : 'scale(1.1)'
  //   });
  // })
})

function doStuffInUserAgent() {

  // If iOS device
  if(navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    ) {

   popupShowIos();

    // var jsScript = document.createElement("script");
    // jsScript.setAttribute("type", "text/javascript");
    // jsScript.setAttribute("src", "js/alternate_js_file.js");
    // document.getElementsByTagName("head")[0].appendChild(jsScript );
    //
    // var cssScript = document.createElement("link");
    // cssScript.setAttribute("rel", "stylesheet");
    // cssScript.setAttribute("type", "text/css");
    // cssScript.setAttribute("href", "css/alternate_css_file.css");
    // document.getElementsByTagName("head")[0].appendChild(cssScript);

    // If Andoird, webOS, BlackBerry, Windowphone device
  } else if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {

    popupShowAndroid();
  }

  else{
     // write code for your desktop clients here
  }
}

function popupShowIos() {
  $('.popup-section').addClass('popup-open');
  $('#popup-ios').addClass('popup-wrap-open');

  $('#close-btn1').not('.popup-wrap').on('click', function(){
    $('.popup-section').removeClass('popup-open');
  })
}

function popupShowAndroid() {
  $('.popup-section').addClass('popup-open');
  $('#popup-android').addClass('popup-wrap-open');

  $('#close-btn').not('.popup-wrap').on('click', function(){
    $('.popup-section').removeClass('popup-open');
  })
}


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
  $('.btn-search-1').on('click', function(){
    if($(window).width() > 1120) {
      $('.carousel-1').toggleClass('push-carousel');
    }

    $('.wrap-content').toggleClass('pull-content add-padding');

    $('.copyright').toggleClass('position-copyright');

    $('.slogan').toggleClass('slogan-gone');

    $('.home-wrap').toggleClass('abc');

  })
}



function lightSearch() {
    var isSearch = false;
    $('.wrap-content .wrap-form .form-control').on('focus', function() {
        if(isSearch === false) {
            $('.backdrop-search').toggleClass('toggleBackdrop');
            // $('body').toggleClass('focused ');
            $('.tab-pane').toggleClass('act-search');
            $('.close-icon').toggleClass('show-close-icon');
            isSearch = true;
        }
    })
    $('.close-icon').on('click', function() {
        if(isSearch === true) {
            $('.backdrop-search').toggleClass('toggleBackdrop');
            // $('body').toggleClass('focused ');
            $('.tab-pane').toggleClass('act-search');
            $('.close-icon').removeClass('show-close-icon');
            isSearch = false;
        }
    })
    // $('.tab-pane select[name="category"] + div input, .tab-pane select[name="location"] + div input').on('focus', function() {
    //     if(isSearch === false) {
    //         $('.backdrop-search').toggleClass('toggleBackdrop');
    //         $('body').toggleClass('focused ');
    //         $('.tab-pane').toggleClass('act-search');
    //         isSearch = true;
    //     }
    // })
    $('.backdrop-search').on('click', function() {
        if(isSearch === true) {
            $('.backdrop-search').toggleClass('toggleBackdrop');
            // $('body').toggleClass('focused ');
            $('.tab-pane').toggleClass('act-search');
            $('.close-icon').removeClass('show-close-icon');
            isSearch = false;
        }
    })
}
