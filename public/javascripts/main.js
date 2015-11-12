
	$(document).ready(function(){
		var grid = dhtmlXGridFromTable("cars_table");
		grid.enableAutoHeight(true, 900, 300);
		//grid.setColMinWidth("200,200,200")
		grid.setSizes();
		console.log("TEST")
		// grid.setHeight(150);
		//$('.nav-block').css('width', '100%');
		//$('.nav-block').css('max-width', '200px');
		//$(window).resize(function(){
		//	var windowWidth = $(window).width();
		//	$('.cars_table').css("width",(windowWidth * .8)+"px");
		//});
	})

	

