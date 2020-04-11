$(document).ready(function() {
    $(".navbar-link").on("click", function(event) {
        event.preventDefault();
		var href = $(this).attr("href");

        var offset = href ? $(href).offset().top : 0; //distance from desired section to the top of the page

        var topDistance = $(window).scrollTop(); //distance from position to the top of the page
        var delta_space = Math.abs(offset - topDistance); //distance to be made

		var velocity = 2.5;/* determines the time by dividing the distance to the desired velocity */

        $("body, html").animate({ scrollTop: (offset)}, delta_space / velocity);

    });

    /* $(".text-about").toggle(function () {

            $(this).animate({width: "60%"}, 800);

            $(this).children(".short-essay").animate({opacity: 0}, 500, function (){
                $(this).hide();
            });
            $(this).children(".long-essay").show(700);
            $(this).children(".long-essay").animate({opacity: 1}, 700);
            
        }, function () {
            $(this).animate({width: "20%"}, 800);

            $(this).children(".long-essay").animate({opacity: 0}, 500, function (){
                $(this).hide();
            });
            $(this).children(".short-essay").show(700);
            $(this).children(".short-essay").animate({opacity: 1}, 700);
            
        }
    ); */

    //svg color replacement
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
  
});