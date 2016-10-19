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
		$(".Wrapper-home, aside, #showcase, #wrapper").css({
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

	//Login Drop
	$(".login-btn a, .login-drop").mouseover(function(){
		$(".login-drop").css("display", "block");
		$(".login-btn a").css({
			"background": "-webkit-linear-gradient(left, rgba(247, 160, 133, 0.7), rgba(242, 99, 93, 0.7)),  url(../images/ico_login.png) no-repeat center",
			"background": "-moz-linear-gradient(left, rgba(247, 160, 133, 0.7), rgba(242, 99, 93, 0.7)),  url(../images/ico_login.png) no-repeat center",
			"background": "-ms-linear-gradient(left, rgba(247, 160, 133, 0.7), rgba(242, 99, 93, 0.7)),  url(../images/ico_login.png) no-repeat center",
			"background": "-o-linear-gradient(left, rgba(247, 160, 133, 0.7), rgba(242, 99, 93, 0.7)),  url(../images/ico_login.png) no-repeat center"
		})
	});
	$(".login-btn a, .login-drop").mouseleave(function(){
		$(".login-drop").css("display", "none");
	});

	//login popup
	$('#open-pop-up-login').click(function (e) {
		e.preventDefault();
		$('#pop-up-login').popUpWindow({action: "open"});
	});
	$('#open-pop-up-signup').click(function (e) {
		e.preventDefault();
		$('#pop-up-signup').popUpWindow({action: "open"});
	});
	$('.sign-cls').click(function () {
		$('#pop-up-login').parent().parent().parent().css('display', 'none');
		$('#pop-up-login').parent().parent().parent().prev().css('display', 'none');
	});


	//Custom Scroll
	(function($){
		$(window).on("load",function(){
			$.mCustomScrollbar.defaults.theme="dark-thin"; //set "light-2" as the default theme
			$(".scroll-custom-y").mCustomScrollbar();
		});
	})(jQuery);
});