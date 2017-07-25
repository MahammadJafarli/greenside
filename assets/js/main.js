$(document).ready(function(){
	$(window).scroll(function(event) {
		var animate= $(window).scrollTop();
		console.log(animate);
		if (animate>220) {
			$(".navbar_change").css({
        background:'#1b6d3f',
        width:'100%',
        height:'80px',
        position:'fixed',
        top:'0px',
			});
      $("header").css({
        paddingTop:'15px',
      });
		}
		if (animate==0) {
			$(".navbar_change").css({
				background:'transparent',
			});
		}
	});
});

$(function(){
  $.scrollIt();
});
