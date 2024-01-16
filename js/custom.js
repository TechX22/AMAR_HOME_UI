$(document).on("scroll", function () {
  if ($(document).scrollTop() > 40) {
      $(".header_outer").addClass("shrink");
  } else {
      $(".header_outer").removeClass("shrink");
  };
});

$(".menuTrigger").click(function(){
  $("body").toggleClass("menu_active");
});

$(".overly").click(function(){
  $("body").removeClass("menu_active");
});


/* ---------------------------------------------
Partner Logo Slider
--------------------------------------------- */
$('#slider_partnr_logo').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:800,
  arrows: false,
  dots:false,
  responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1599,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay:true
      }
    }
  ]
});

//Custom Tab
$(".tab_list ul li").click(function(){
  var target = $(this).attr('data-rel');
  $(".tab_list ul li").removeClass('active');
  $(this).addClass('active');
  $("#" + target).addClass('shw_tab').siblings().removeClass('shw_tab');
});

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  $(document).off("scroll");
  $('.custm_nav li a').each(function () {
      $(this).parent('li').removeClass('current-menu-item');
  });
  $(this).parent('li').addClass('current-menu-item');
  var target = this.hash, $target = $(target)
;
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 70
  }, 500, 'swing', function () {
      window.location.href.substr(0, window.location.href.indexOf('#'));
      $(document).on("scroll", onScroll);
  });
});
$(document).on("scroll", onScroll);


function onScroll(event){
    var scrollPos = $(document).scrollTop() + 120
    $('.custm_nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav li').removeClass("current-menu-item");
            currLink.parent('li').addClass("current-menu-item");
        }
        else{
            currLink.parent('li').removeClass("current-menu-item");
        }
    });
}


//LightBox
function openLightBox(){
  let gr = document.querySelector("#first_graph");
  gr.click()
}
//End of lightbox

function sendEmail() {
    Email.send({
        SecureToken: "189ce6a2-9ed0-4169-adf5-8ed5d5b0f831",  // Replace with your secure token
        To: 'subhajitsinha44@gmail.com',
        From: 'subhajitsinha44@gmail.com',
        Subject: 'Test Email',
        Body: 'This is a test email'
    }).then(
        message => alert(message)
    );
}