$(document).ready(function() {
	$('.tabs > div').click(function() {
		var $currentTabIndex = $(this).index();
		var $innerHeight = $('.content-inner').find('section').eq($currentTabIndex).height();
		// $('.content-inner').stop().animate({'height': $innerHeight + 50}, 200).find('section').eq($currentTabIndex).stop().fadeIn().siblings().fadeOut();
		$('.content-inner').stop().animate({'height': $innerHeight + 50}, 'fast').find('section').eq($currentTabIndex).stop().css({zIndex:99}).fadeIn(200).siblings().css({zIndex:90}).fadeOut(50);

		$(this).addClass('active').siblings().removeClass('active');

		var $currentTabPosition = $(this).position().left;
		// $('.tab-bg').stop().animate({'left': $currentTabPosition});
		$('.tab-bg').stop().animate({'left': $currentTabPosition}, 0);
	});

	// $('.tabs > div').mouseenter(function() {
	// 	var $currentTabPosition = $(this).position().left;
	// 	$('.tab-bg').stop().animate({'left': $currentTabPosition}, 200);
	// });

	// $('.tabs > div').mouseleave(function() {
	// 	var $activeTabPosition = $('.active').position().left;
	// 	$('.tab-bg').stop().animate({'left': $activeTabPosition}, 200);
	// });

	$('.pagination > span').click(function() {
		var whichRow = '.' + $(this).parent().attr('data-row').toString();

		if ($(this).hasClass('pagination-nav-next')) {
			var whichPage = parseInt($(whichRow).find('.active-p').attr('class').replace(/\D/g,'')) + 1;
			if (whichPage >= 4) {
				var whichPage = 1;
			}
		} else {
			var whichPage = $(this).index() + 1;
		}

		var corrPage = $(whichRow).find('.slide-row-p' + whichPage);
		if (!corrPage.hasClass('active-p')) {
			$(whichRow).find('.active-p').animate({'left': '-100%', 'opacity': 0}, 500).removeClass('active-p').addClass('inQueue');
			corrPage.addClass('active-p').animate({'left': 0, 'opacity': 1}, {
				duration: 500,
				complete: function() {
					$('.inQueue').remove().clone().appendTo(whichRow).css({'left': '100%', 'opacity': '0'}).removeClass('inQueue');
				}
			});
		}
	});


});
