$(document).ready(function() {
    $(".navbar-link").on("click", function(event) {
		event.preventDefault();
		
        var href = $(this).attr("href");

        var offset = href ? $(href).offset().top : 0;

        var topDistance = $(window).scrollTop();
        var delta = Math.abs(offset - topDistance);

        $("body, html").animate({ scrollTop: offset }, delta / 2);

    });

});