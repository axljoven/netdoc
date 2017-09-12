$("document").ready(function(){
	
	// 	Toggle Hidden nav
		$("#hidden-nav a").click(function(e){
		    var ullist = $(this).parent().children('ul:first');
		    ullist.slideToggle('fast');
		});


	//	Footer Links
		$("#site-footer a").click(function(e){
		    var ullist = $(this).parent().children('ul:first');
		    ullist.slideToggle('medium');
		});


	// 	MENU toggle
	/*	var isMenuPressed = false;
		$("#menu").click(function(){
			if(isMenuPressed == false){
				$("#hidden-nav").slideDown('fast');
				$("#menu").text("Close Menu");
				isMenuPressed = true;
			} else {
				$("#menu").text("Menu");
				$("#hidden-nav").slideUp('fast');
				isMenuPressed = false;
			}
		});
	*/



	//	Menu: About us / Contact us
		$(".child-link").click(function(e){
		    if(isMenuPressed == true) {
		    	$("#menu").text("Menu");
				$("#hidden-nav").slideUp('fast');
				isMenuPressed = false;

				$("#hidden-nav ul ul, #hidden-nav ul").slideUp('fast');
		    }
		});


	//	Get Full Year for Copyright
		var year = new Date();
		$("#site-copyright #year").text(year.getFullYear());


	//	Smooth Scrolling
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 500);
					return false;
				}
			}
		});
});