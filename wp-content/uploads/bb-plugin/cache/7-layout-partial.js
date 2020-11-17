
jQuery(function($){$('#demo-lightbox').click(function(e){e.preventDefault();$('.custom-lightbox').fadeIn();})
$('.close-lightbox').click(function(e){e.preventDefault();$('.custom-lightbox').fadeOut();})
jQuery(function($){$('.posts-slider').slick({dots:false,arrows:true,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})});});