$(document).ready(function() {
    $('.banner_slider').slick({
        slidesToShow: 1, // hiện số ảnh muốn hiện trên slide
        slidesToScroll: 1, // hiện số ảnh khi scroll mặc định là 1
        infinite: true, // lặp lại
        arrows: false, //hiển thị nút
        fade: false, //khi chuyển thì nó sẽ mờ
        autoplay: true, // tự động cuộn
        autoplaySpeed: 2000, // thời gian tự động
        dots: true, // dấu chấm ở dưới
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>", //key word: slickslides arows
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

        // responsive: [{// responsive theo tỉ lệ khung hình
        //     breakpoint: 1024,// giao diện khung nhìn của màn
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //     }
        // }]
    });
});

//pảtner1
$(document).ready(function() {
    $('.partner__somestic-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,

        responsive: [{ // responsive theo tỉ lệ khung hình
                breakpoint: 1024, // giao diện khung nhìn của màn
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: false,
                }
            },
        ]
    });

});

//partner2
$(document).ready(function() {
    $('.partner__foreign-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,


        responsive: [{ // responsive theo tỉ lệ khung hình
                breakpoint: 1024, // giao diện khung nhìn của màn
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: false,
                }
            },
        ]
    });
});

$(document).ready(function() {
    $('.core__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,



    });
});

$(document).ready(function() {
    $('.service__slider_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 3000,



    });
});

$(document).ready(function() {
    $('.story__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 3000,

        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>", //key word: slickslides arows
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

    });
});