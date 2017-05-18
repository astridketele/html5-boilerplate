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

/*
http://tympanus.net/Development/ProgressButtonStyles/
*/
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
$("#signup-button").click(function(e){
  var $email = $("#subscribe-email").val();
  if(validateEmail($email)){
    //alert("Valid email!");
    $(".message-content").html("Now you are subscribed!");
  }else{
    //alert("Invalid email!");
    $(".message-content").html("E-mail address is not valid.");
  }
  
  $(".subscribe-message").fadeIn(1500).css("display","block").delay(2000).fadeOut(500);
  e.preventDefault();
});