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

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*
 Get a random insult from the insults.txt file upon click of insult_btn
*/
$.ajax({
        url: "../data/insults.txt",
        cache: false,   // force the browser to not make cache of the retrieved data
        dataType: "text",  
        success: function( data, textStatus, jqXHR ) {
                
                var insults = data.split('\n')
                insults = insults.filter(Boolean) // remove empty strings
                
                $('#insult_btn').click(function(){
                    $('#insultdiv').text('');
                    $('#insultdiv').text((insults[Math.floor(Math.random()*insults.length)]))
                });
        },
        error: function(){
          // TODO: handle error
        }
        
});