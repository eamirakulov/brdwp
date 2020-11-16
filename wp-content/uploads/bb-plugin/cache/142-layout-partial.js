
/* Start Global Node Custom JS */

/* End Global Node Custom JS */


/* Start Layout Custom JS */
jQuery(function($) {
  $('.posts-slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  })
});
/* End Layout Custom JS */

