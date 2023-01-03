// $('.carousel[data-type="multi"] .item').each(function() {
// 	var next = $(this).next();
// 	if (!next.length) {
// 		next = $(this).siblings(':first');
// 	}
// 	next.children(':first-child').clone().appendTo($(this));

// 	for (var i = 0; i < 3; i++) {
// 		next = next.next();
// 		if (!next.length) {
// 			next = $(this).siblings(':first');
// 		}

// 		next.children(':first-child').clone().appendTo($(this));
// 	}
// });

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    var $banner = $(".hero-banner");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $banner.height());
  });
});

$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
  loop: true,
  margin: 50,
  responsiveClass: true,
  nav: true,
  loop: true,
  stagePadding: 100,
  responsive: {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

$(document).ready(function () {
  $(".popup-youtube").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
  });
});
$(".item").magnificPopup({
  delegate: "a",
});

/* document
  .querySelector(
    "body > main > section > article:nth-child(1) > div > nav > button "
  )
  .addEventListener("click", function () {
    if (
      document
        .querySelector(".navbar.navbar-dark.navbar-expand-lg")
        .classList.contains("darkBg") == false
    ) {
      document
        .querySelector(".navbar.navbar-dark.navbar-expand-lg")
        .classList.toggle("darkBg");
    } else {
      document
        .querySelector(".navbar.navbar-dark.navbar-expand-lg")
        .classList.toggle("darkBg");
    }
  }); */

/* if (window.innerWidth < 768) {
  document.querySelector(".cmp-details__desc1").innerHTML =
    '<div class="cmp-details__desc1"><div class="content-desc" style="width:85%; margin: auto"><p class="para-text red-bg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere orci ut felis dictum, a lacinia mauris mattis. Integer ut nibh vitae tortor lobortis elementum. Etiam vehicula, arcu et faucibus tristique, est sem efficitur ligula, at porta quam felis ac ipsum. Aenean eu auctor velit, et mattis urna. Maecenas vulputate tempor dui, convallis facilisis elit accumsan et. Donec mattis, elit eget tempus porta, dui magna aliquet est, sit amet gravida purus diam eget arcu. Maecenas velit tortor, sagittis sed mi ac, dapibus sollicitudin nibh. Curabitur maximus convallis metus, eget euismod ante ornare vel. Duis molestie mauris ex, eget dignissim nisi ullamcorper sodales. Proin imperdiet eleifend mattis.</p></div></div>';
} */

$(document).click(function (event) {
  var clickover = $(event.target);
  var $navbar = $(".navbar-collapse");
  var _opened = $navbar.hasClass("show");
  if (_opened === true && !clickover.hasClass("navbar-toggler")) {
    $navbar.collapse("hide");
  }
});

$(document).ready(function (event) {
  $(".nav-link-1").click(function () {
    var page = $(this).attr("href");
    var offset = 110;
    $("html, body").animate({
      scrollTop: $(page).offset().top - offset,
    });
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $navbar.collapse("hide");
    }
    return false;
  });
});
