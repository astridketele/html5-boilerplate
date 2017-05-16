console.log('Hello world!');

var columnLeftMargin = null;
var columnRightMargin = null;
var boxedMarginBottom = null;

$(document).ready(function() {

	console.log('ready');

	columnLeftMargin = parseFloat($('.column.left').css('margin-right'));
	columnRightMargin = parseFloat($('.column.right').css('margin-left'));
	boxedMarginBottom = columnLeftMargin + columnRightMargin;

	$('.boxed, .column img').css({
		'margin-bottom': boxedMarginBottom
	});

});

$(window).resize(function() {
	console.log('resize');
	console.log('resize columnLeftMargin ', columnLeftMargin);
	console.log('resize columnRightMargin ', columnRightMargin);
});

$(window).scroll(function() {
	console.log('scroll');
});