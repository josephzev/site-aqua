// ---
require('./bootstrap');

/* YOUR CODE HERE */

/*scroll*/

var element = document.getElementById("navbar");

var path = window. location. pathname;
var page = path. split("/"). pop();

UIkit.util.on('#nav-scroll', 'inview', function () {

  
	element.classList.remove("scroll");

    if(page != 'portfolio' || page != 'gallery'){
	document.documentElement.style.setProperty("--line", "#000");

	   }
});


UIkit.util.on('#nav-scroll', 'outview', function () {

  
	element.classList.add("scroll");

	document.documentElement.style.setProperty("--line", "#990033");
	    
});