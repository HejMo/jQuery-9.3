$(function() {
	var carouselList = $('#carousel ul');
	var prevImg = $('#prev');
	var nextImg = $('#next');

	setInterval(changeImg, 5000); 

	function changeImg() {
		carouselList.animate({'marginLeft':-400}, 500, movePrevSlide);
	};

	function movePrevSlide() {
		var firstItem = carouselList.find("li:first");  // nie wiem co zrobić żeby to się nie powtarzało
		var lastItem = carouselList.find("li:last");   	// jak wyrzuce to poza funkcję to nie działa
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	function moveNextSlide() {
		var firstItem = carouselList.find("li:first");  // nie wiem co zrobić żeby to się nie powtarzało
		var lastItem = carouselList.find("li:last");    // jak wyrzuce to poza funkcję to nie działa
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	};

	prevImg.click(function() {
		movePrevSlide();
	});

	nextImg.click(function() {
		moveNextSlide();
	});

});




