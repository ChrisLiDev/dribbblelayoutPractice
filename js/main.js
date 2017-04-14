$(document).ready(function() {
	$('.menu ').on('click', function() {
		// event.preventDefault();
		$(this).siblings('.header').toggleClass('open');
		$(this).toggleClass('menu-open');
		$('html,body').animate({
			scrollTop: 0
		},1);

	});
	$(window).scroll(function() {
		//console.info($(window).scrollTop());
		if (window.matchMedia('(max-width: 1000px)').matches) {
	        $('.backtop').hide();
	    } else {
			if( $(window).scrollTop() > 200 ){
				$('.backtop').fadeIn();
			}else {
				$('.backtop').fadeOut();
			}
	    }
	});

	$('.backtop').on('click', function() {
		// event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
});