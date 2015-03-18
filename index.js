var App = {
	init: function () {
		var margin = parseInt($('.pins article').css('margin-bottom'));
		var columnCount = 3;
		if ($('.pins').width()<768) {
			columnCount = 2;
		}
		var columnWidth = $('.pins').width()/columnCount - margin;
	
	
		var top = [];
		for (var i = 0; i < columnCount; i++) {
			top[i] = 0;
		}
	
		$('.pins article').each(function () {
	
			var currentColumn = 0;
			top.forEach(function(elt, i) {
				if (top[i]<top[currentColumn]) {
					currentColumn = i;
				}
			});
	
			var left = (margin*(currentColumn+1))+currentColumn * columnWidth;
	
			$(this).css({
				'position': 'absolute',
				'width':    columnWidth+'px',
				'top':      top[currentColumn]+'px',
				'left':     left+'px'
			});
	
			top[currentColumn] += $(this).height()+margin;
			currentColumn = (currentColumn+1)%columnCount;
	
		});
	}
};

$(function() {
	App.init();
	$(window).resize(function() {
		App.init();
	});
});