(function($){
	
	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});
	
	/* ---------------------------------------------- /*
	 * Home BG
	/* ---------------------------------------------- */

	$(".screen-height").height($(window).height());

	$(window).resize(function(){
		$(".screen-height").height($(window).height());
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('#home').css({'background-attachment': 'scroll'});
	} else {
		$('#home').parallax('50%', 0.1);
		}
	
	
})(jQuery);