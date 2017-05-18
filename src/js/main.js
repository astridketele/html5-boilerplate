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
/* JS scripts are added see github repo for more 
https://github.com/fralec/ElegantJS */

$('#stay').elegant({
    clickNextToClose: true,
    newTab: true,
    facebook: {
        id: 'alec.vonbarnekow'
    },
    twitter: {
        id: 'fralec_'
    },
    github: {
        id: 'fralec'
    },
    website: {
        id: 'https://fralec.com'
    },
    instagram: {
        id: 'fralec__'
    }
});
/*
http://tympanus.net/Development/ProgressButtonStyles/
*/
