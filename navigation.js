$(function() {
	$("#toogleNav").click(function () {
		$('html').toggleClass('menuShown');
		if ($('html').hasClass('menuShown')) {
			$('.content').click(function () {
				$('html').removeClass('menuShown');
			});
		}
	});
	
	$("nav a").click(function () {
		$('nav li').removeClass('active');
		$(this).parent('li').addClass('active');
	});
	
});