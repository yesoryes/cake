//Javascript 
$(document).ready(function(){
	//Navigation
	 //$('.profile-bg').height($(window).height() - 260);
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});

/* For Browser Height*/
	function resizeSlide() {
		var fullHeight = $(window).height();
		$(".Wrapper-home, aside, #showcase").css({
			'height' : fullHeight,
		});
		if (window.matchMedia('(min-width: 1400px)').matches) {
			$(".cake-view-wrap, .cake-text-wrap").css({
				'height': fullHeight - 63,
			});
		};
		if (window.matchMedia('(max-width: 1399px)').matches) {
			$(".cake-view-wrap").height($(".cake-text-wrap").height());
		};
	};
	resizeSlide();
	$( window ).resize(function() {
		resizeSlide();
	});
/* End For Browser Height*/

});