// toggle menu
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav.main-navigation").toggleClass("expanded");
  });

  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
  // Load More
  // $('#loadMore').click(function () {
  //   $("#loadMore").text("No More Content").addClass("noContent");
  // });

  var counter = 0;
  $("#loadMore").on("click", function () {
    var items = $(".cards_wrapper").eq(0).clone();
    items.hide();
    items.insertBefore($(".hidden_items"));
    items.fadeIn();
    var scrTop = $(window).scrollTop();
    $("html, body").animate({
      scrollTop: scrTop + 400
    }, 1200);
    counter++;
    if (counter > 0) {
      $(this).hide();
    }
  });

});

// Scrolling Effect
$(window).on("scroll", function () {
  var st = Math.round($(window).scrollTop());

  //navigation colors on scroll
  if (st) {
    $('.main-navigation').addClass('black');
  } else {
    $('.main-navigation').removeClass('black');
  }

  //post animation effect on scroll
  var el = $('section.blog__posts');
  if (!el.length) return;

  var sectionPosition = Math.round(el.offset().top);
  var scrollPosition = st + window.innerHeight;

  if (scrollPosition < sectionPosition) {
    el.removeClass('visible');
  } else {
    el.addClass('visible');
  }

  //text parallax effect on scroll
  // const target = document.querySelector('.parallax-text');
  // var scrolled = window.pageYOffset;
  // var rate = scrolled * -2;
  // target.style.color = 'red';



  /*if(scrollPosition < sectionPosition) {
    el.css({ opacity: 0, transform: 'translateY(200px)' });
  } else if(scrollPosition < sectionPosition + 500) {
    var distance = 500;
    var currentPosition = sectionPosition + 500 - scrollPosition;
    var percent = 100 - (currentPosition / distance * 100);
    console.log(percent);

    var opacity = 1 / 100 * percent;
    var Y = 500 - (500 / 100 * percent);
    el.css({ opacity: opacity, transform: 'translateY(' + Y + 'px)' });
  } else {
    el.css({ opacity: 1, transform: 'translateY(0)' });
  }*/

});

// slider position - responsive
function responsiveFunction(responsive) {
  if (responsive.matches) { // If media query matches
    $('.main-slider').css('top', $('.main-navigation').height());
    $('.main-slider').css('marginBottom', "90px");
  } else {
    $('.main-slider').css('top', 0);
    $('.main-slider').css('marginBottom', 0);
  }
}

var responsive = window.matchMedia("(max-width: 992px)")
responsiveFunction(responsive) // Call listener function at run time
responsive.addListener(responsiveFunction) // Attach listener function on state changes

//Add active class to the current menu item
var header = document.getElementById("main_menu");
var menuItems = document.getElementsByClassName("main_menu-item--link");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("main_menu-item--active");
    current[0].className = current[0].className.replace(" main_menu-item--active", "");
    this.className += " main_menu-item--active";
  });
}

//Owl Carousel
$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    dots: false,
    slideBy: 3,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  //parallax text set timeout
  $('.parallax-text').hide();

  setTimeout(function () {
    $('.parallax-text').show();
  }, 900);

  //inner page title - set timeout
  $('.blog-post__title').hide();

  setTimeout(function () {
    $('.blog-post__title').show();
  }, 900);

});

//wow.js - scroll animations

$(function () {
  new WOW().init();
});


//mouse parallax

var scene = document.getElementById('scene');
if (scene) {
  var parallaxInstance = new Parallax(scene);
}

//loading 

// $(window).on('load', function () {
//   setTimeout(function () {
//     $('body').removeClass('preload');
//   }, 1000);
// });

//Preloader

$('body').addClass('preloader-active');
$(window).on('load', function () {
  setTimeout(function () {
    $('.preloader').fadeOut();
    $('.preloader-spinner').delay(1000).fadeOut('slow');
    $('body').removeClass('preloader-active');
  }, 700);
});



//contact form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


//scrollspy smooth scroll

$(".fixed_scrolling-link[href^='#']").on('click', function (e) {

  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function () {

    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = hash;
  });

});