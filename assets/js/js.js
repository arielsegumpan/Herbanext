$(document).ready(function () {
    AOS.init();
    //humberger
    const icons = document.querySelectorAll('.icon_ni');
    icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
    });

    var $navbar = $('header.fixed-top');
    var stickyTop = $navbar.offset().top;
    var scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 50) {
        $navbar.addClass('bg_nav_white');
    }

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= 50) {
            $navbar.addClass('bg_nav_white');
        } else {
            $navbar.removeClass('bg_nav_white');
        }
    });

    // Add hover event handlers
    $('.dropdown').hover(
        function () {
            // On hover in
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
        },
        function () {
            // On hover out
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
        }
    );

    // story carousel
    $('#story .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        smartSpeed: 3000,
        autoplaySpeed: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});