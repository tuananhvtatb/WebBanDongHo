$('#show-menu-mobi').on('click', function(event){
	event.stopPropagation();
	$('.menu').css('left', 0);
});

$('.menu').on('click', function(event){
    event.stopPropagation();
});

$('html, body').on('click', function(){
	$('.menu').css('left', "-350px");
});

$('#icon-close').on('click', function(){
    $('.menu').css('left', "-350px");
});

$('.carousel').carousel({
  interval: 3000
})
$('#show-pro-mobi').on('click', function(event){
    event.stopPropagation();
    $('.nav-pro').css('left', 0);
});
$('.items-container').slick({
	infinite: true,
	autoplay: true,
    prevArrow: $('#pre'),
    nextArrow: $('#next'),
		autoplaySpeed: 2000,
		slidesToShow: 4,
		responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
       ]
});
var angle=0;
$(document).ready(function() {
       $('#show-cate').click(function() {
            angle += 180;
            $('.cate').toggle("slide");
            $('#arrow').css('transform','rotate(' + angle + 'deg)');
       });
});
