$(document).ready(function() {
	$('.tabs > div').click(function() {
		var $currentTabIndex = $(this).index();
		$('.content-inner').find('section').eq($currentTabIndex).stop().fadeIn().siblings().fadeOut();
		$(this).addClass('active').siblings().removeClass('active');

		var $currentTabPosition = $(this).position().left;
		$('.tab-bg').stop().animate({'left': $currentTabPosition});
	});

	$('.tabs > div').mouseenter(function() {
		var $currentTabPosition = $(this).position().left;
		$('.tab-bg').stop().animate({'left': $currentTabPosition}, 200);
	});

	$('.tabs > div').mouseleave(function() {
		var $activeTabPosition = $('.active').position().left;
		$('.tab-bg').stop().animate({'left': $activeTabPosition}, 200);
	});

});