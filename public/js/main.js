function test(){
	var tabsNewAnim = $('#navigation-link');
	var selectorNewAnim = $('#navigation-link').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
	  "top":itemPosNewAnimTop.top + "px", 
	  "left":itemPosNewAnimLeft.left + "px",
	  "height": activeWidthNewAnimHeight + "px",
	  "width": activeWidthNewAnimWidth + "px"
	});
	$("#navigation-link").on("click","li",function(e){
	  $('#navigation-link ul li').removeClass("active");
	  $(this).addClass('active');
	  var activeWidthNewAnimHeight = $(this).innerHeight();
	  var activeWidthNewAnimWidth = $(this).innerWidth();
	  var itemPosNewAnimTop = $(this).position();
	  var itemPosNewAnimLeft = $(this).position();
	  $(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	  });
	});
  }
  $(document).ready(function(){
	setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
	setTimeout(function(){ test(); });
});