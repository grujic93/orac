jQuery(document).ready(function($) {

	// Load Animation
	$(window).on('load',function(){
		$('.site').removeClass('loaded');
	});

	// Hamburger Menu
	$('.open-menu').click(function(e){
		e.preventDefault();
		if($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.main-navigation').removeClass('open');
			$('.menu-item').removeClass('open');
			$('body').removeClass('uk-overflow-hidden');
		} else {
			$(this).addClass('open');
			$('.main-navigation').addClass('open');
			$('body').addClass('uk-overflow-hidden');
		}
	});

	if (window.innerWidth < 1025) {
		$('.menu-item').click(function(e){
			if($('.open-menu').hasClass('open')) {
				$('.open-menu').removeClass('open');
				$('.main-navigation').removeClass('open');
				$('.menu-item').removeClass('open');
				$('body').removeClass('uk-overflow-hidden');
			} else {
				$('.open-menu').addClass('open');
				$('.main-navigation').addClass('open');
				$('body').addClass('uk-overflow-hidden');
			}
		});
	}

});