$(document).ready(function(){var i=$(window).height(),t=$("header").outerHeight(),s=$(".main-slider-awards").outerHeight(),e=i-t-s+18,h=i-t-s,o=$(window).width(),r=$(".container").width(),c=o-r,d=e/2-5,g=2*(h-5)/3,p=g/2-5,a=$(".main-promo>p").outerHeight(),w=h-a;$(window).width()>1200?($(".main-promo, .slider-big").css("height",e),$(".pict-small, .pict-small-overlay").css({height:d,width:d}),$(".pict-big, .pict-big-overlay").css({height:e,width:e}),$(".pict-group").css({width:e+d+10}),$(".pict-group:first .pict-big-overlay").css({"padding-left":c/2+30})):$(window).width()>770&&$(window).width()<1199?($(".main-promo, .slider-big").css("height",h),$(".pict-big, .pict-big-overlay").css({height:g,width:g}),$(".pict-small, .pict-small-overlay").css({height:p,width:p}),$(".pict-group").css({width:g}),$(".pict-group:first .pict-big-overlay").css({"padding-left":c/2+30})):($(".main-promo, .slider-big").css("height",h),$(".promo-slider").css({height:w}))});