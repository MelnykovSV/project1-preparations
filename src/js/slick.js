$('.responsive').slick({
  dots: true,
  prevArrow:
    '<button type="button" class="slick-header-prev"><svg class="slick-header-prev-icon"class="slick-header-prev" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 15.49h-26.16l6.019-6.061-1.419-1.429-8.44 8.5 8.44 8.5 1.419-1.429-6.019-6.061h26.16v-2.021z"></path></svg></button>',
  nextArrow:
    '<button type="button" class="slick-header-next"><svg class="slick-header-next-icon" width="40" height="40"><use href="images/icons.svg#icon-arrow-right"></use></svg></button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$('.responsive1').slick({
  dots: true,
  prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 1,

  //   responsive: none,
});

// $('.responsive').slick({
//     // dots: true,
//     prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
//     nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
//     infinite: true,
//     speed: 300,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     slidesToShow: 3,

//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ],
//   });
