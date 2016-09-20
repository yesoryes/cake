//Javascript 
$(document).ready(function(){
	//Navigation
	 $('.profile-bg').height($(window).height() - 260);
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});

/* For Browser Height*/
	function resizeSlide() {
		var fullHeight = $(window).height();
		$("#wrapper, aside, #showcase, .cake-view-wrap, .cake-text-wrap").css({
			'height' : fullHeight,
		});
	};
	resizeSlide();
	$( window ).resize(function() {
		resizeSlide();
	});
/* End For Browser Height*/

});