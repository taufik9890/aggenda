


//slick-slider
$('.bird-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  dots: false,
  autoplaySpeed: 1000,
});
//banner-slick
$('.banner-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  dots: false,
  autoplaySpeed: 1000,
});
//group-slider
$('.group').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  dots: false,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
  ]
});

//progressbar

  $('.experince-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css('width',per+'%');
   $({animatedValue: 0}).animate({animatedValue: per},{
     duration: 1000,
     step: function(){
       $this.attr('per',Math.floor(this.animatedValue) +'%');
     },
     complete: function(){
      $this.attr('per', Math.floor(this.animatedValue) +'%');
    }
   });
  }) ;
 //mixitup
$(function(){
  var safayet = document.querySelector(".mixitup");
  var mixer  = mixitup(safayet)
})

//slick-slider-blog
$('.blog-slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  centerMode: true,
  centerPadding: false,
  autoplaySpeed: 500,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
  ]
});

//team-slider
$('.team-slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 500,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
  ]
});
//loggo-slick-one
$('.loggo-slick-one').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  dots: false,
  rtl: false,
  autoplaySpeed: 500,
});
//loggo-slick-two
$('.loggo-slick-two').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  dots: false,
  autoplaySpeed: 500,
});



