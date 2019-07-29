$(document).ready(() => {
    $('.thing').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        arrows: false
    });
});
$(document).ready(() => {
    $('.slider2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,

    });
});

$(document).ready(() => {
    $('.aboutslider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

// $(document).ready(() => {
//     $('.slide4').slick({
//         dots: true,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
//         ]
//     });
// });

let nav = document.querySelector('.nav');

// nav.addEventListener('hover', function () {
//     nav.style.color = 'red';
// })
$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 20) {
        $('.nav').stop().animate({ height: "80px" }, 200);
        $('.nav').css("top", 0);
        $('.nav').addClass('.shadow');
        $('.logo').show(1000);
        $('.logo2').hide(1000);
        $('.upnav').hide(1000);


    }
    else {
        $('.nav').stop().animate({ height: "100px" }, 200);
        $('.upnav').show(1000);
        $('.logo').hide(1000);
        $('.logo2').show(1000);
        $('.upnav').show(1000);
        $('.nav').removeClass('.shadow');



    }
});



// $(window).scroll(function () {
//     if ($(this).scrollTop() < 30) {
//         $('.logo').hide(1000);
//         $('.logo2').show(1000);
//         $('.upnav').show(1000);


//     }
//     else {
//         $('.logo').show(1000);
//         $('.logo2').hide(1000);
//         $('.upnav').hide(1000);


//     }
// });


