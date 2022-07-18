$(document).ready(function () {
    //tạo thanh cuộn Scrollbar
    $('#vahicle__list').mCustomScrollbar({
        theme: 'dark'
    });
    function move(value) {
        $('#vahicle__list').mCustomScrollbar("scrollTo", value, {
            scrollEasing: 'easeOut'
        })
    }

    //hiệu ứng trượt đến khi click tiêu đề
    $('.vehiclea__nav ul li a').click(function () {
        if ($(this).attr('id') === "cros-nav") {
            move("#crossover")
        } else if ($(this).attr('id') === "minivan-nav") {
            move("#minivan")
        }
    })

    //click vehicles
    var count = "";
    $('#navClick > a').click(function () {
        if (count === "") {
            count = $(this).attr('id');
            $(this).addClass('active');
            if ($(this).attr('id') === 'tapVehicles') {
                $('#vehiclea').removeClass('hide-vehicle');
                $('#vehiclea').addClass('animate__fadeInUp');
            }
        }
        else {
            if (count === $(this).attr('id')) {
                $(this).removeClass('active');
                count = "";
                $('#vehiclea').removeClass('animate__fadeInUp');
                $('#vehiclea').addClass('animate__fadeOutDown');
                setTimeout(function () {
                    $('#vehiclea').removeClass('animate__fadeOutDown');
                    $('#vehiclea').addClass('hide-vehicle');
                }, 300);
            } else {
                $('#navClick > a').removeClass('active');
                $(this).addClass('active');
                count = $(this).attr('id');
                if ($(this).attr('id') !== 'tapVehicles') {
                    $('#vehiclea').addClass('animate__fadeOutDown');
                    setTimeout(function () {
                        $('#vehiclea').addClass('hide-vehicle');
                        $('#vehiclea').removeClass('animate__fadeOutDown');
                    }, 300);
                }
                else {
                    $('#vehiclea').addClass('animate__fadeOutUp');
                    setTimeout(function () {
                        $('#vehiclea').removeClass('hide-vehicle');
                        $('#vehiclea').removeClass('animate__fadeOutUp');
                    }, 200);

                }
            }
        }
    })

    // click đóng 
    $('.vehicle__close').click(function () {
        $('#vehiclea').addClass('animate__fadeOutDown');
        setTimeout(function () {
            $('#vehiclea').addClass('hide-vehicle');
            $('#vehiclea').removeClass('animate__fadeOutDown');
        }, 300);
        $('#tapVehicles').removeClass('active');
        count = "";
    })

    // hiệu ứng ainmate product
    $('.vehicle__product').addClass('animate__animated animate__fadeInUp');

    // click Discovers up down
    count = "";
    $('#navbarDropdown').click(function () {
        if (count === "") {
            count = $(this).attr('id');
            $('#discoDown').hide();
            $('#discoUp').show();
            $('#discoUp').removeClass('d-none');
        } else {
            $('#discoUp').hide();
            $('#discoDown').show();
            count = "";
        }
    })

    // swippper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });

    //active our vehicles
    $('.carousel-indicators-config > li').click(function () {
        $('.carousel-indicators-config > li').removeClass('active');
        $(this).addClass('active')
    })

    // active li our-vehicles khi click mũi tên tiến lùi
    count = 0
    $('.carousel-control-next-icon').click(function(){
        $('.carousel-indicators-config li').removeClass('active');
        if(count === 4){
            count = 0;
        }else{
            count++;
        }
        $('.carousel-indicators-config li').each(function(i){
            if(i === count){
                $(this).addClass('active')
            }
        });
    })

    count = 0
    $('.carousel-control-prev-icon').click(function(){
        $('.carousel-indicators-config li').removeClass('active');
        if(count === 0){
            count = 4;
        }else{
            count--;
        }
        $('.carousel-indicators-config li').each(function(i){
            if(i === count){
                $(this).addClass('active')
            }
        });
    })

    //back-to-top
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 100);
    })
})


