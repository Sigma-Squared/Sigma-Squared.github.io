/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});

function goToSlide(number) {
    $("#portfolio-carousel").carousel(number);
}

$(document).ready(function() {
    var url = window.location.href;
    var start = url.lastIndexOf("target")+7
    var end = url.lastIndexOf("#")
    var slide = url.substring(start,end);

    if (slide > -1) {
        goToSlide(parseInt(slide))
    }
    
    $('#gal1').galereya({
        wave: false
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


var toggled = false;
function expand() {
    if (!toggled) {
        $("#collage").height(200);
        console.log("expanded");
    } else {
        $("#collage").height(0);
        console.log("collapsed");
    }
    toggled = !toggled;
}
// $(document).ready(function() {
//     $('.title').before('<i class="fa fa-chevron-right"></i>');
//     $('.title').after('<i class="fa fa-chevron-left"></i>');
// });
// Google Maps Scripts
// When the window has finished loading create our google map below