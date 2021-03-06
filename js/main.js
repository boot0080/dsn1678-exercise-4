var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $spaceShipSection = $('.spaceship-section');
var $spaceShip = $('.spaceship');


$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
 
	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-postion', 'center ' + scrollPos / 3 + 'px');
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, {offset: '50%'});


$spaceShipSection.waypoint(function () {
	$spaceShip.addClass('js-spaceship-fade');
}, {offset: '70%'});
