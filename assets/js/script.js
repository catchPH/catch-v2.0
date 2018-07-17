
/* ---------- Start Codes for Navigation Link (active) ---------- */
$(document).ready(function(){
	$('.icon').click(function(){
	$('.nav').toggleClass('active')
	})
})
/* ---------- End Codes for Navigation Link (active) ---------- */


/* ---------- Start Codes for change hamburger to close icon ---------- */
$(document).ready(function(){
	$('.icon').click(function(){
		$('.icon').toggleClass('active');
	})
})
/* ---------- End Codes for change hamburger to close icon ---------- */


/* ---------- Start Codes for Add/Remove .active class in navigation ---------- */
// Get the container element
var navigation = document.getElementById("navigation");

// Get all buttons with class="btn" inside the container
var btns = navigation.getElementsByClassName("links");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
/* ---------- Start Codes for Add/Remove .active class in navigation ---------- */


/* ---------- Start Codes for smmoth scrooling ---------- */
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
    // Prevent default anchor click behavior
    //event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
    scrollTop: $(hash).offset().top
   	}, 800, function(){
   
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
   	} // End if
   	});
})
/* ---------- End Codes for smmoth scrooling ---------- */


/* ---------- Start Codes for Contact - Inputs (Materialize) ---------- */
$(".contact-input").focus(function(){
	$(this).parent().addClass("focus");
	$('.contact-info').addClass('focus');
	}).blur(function(){
		if($(this).val() === ''){
		$(this).parent().removeClass("focus");
		$('.contact-info').removeClass('focus');
	}
})
/* ---------- End Codes for Contact - Inputs (Materialize) ---------- */


/* ---------- Start Codes for Portfolio Filter ---------- */
var html5_css3 = new ldBar("#html5-css3");
var load_html5_css = document.getElementById('html5-css3').ldBar;
html5_css3.set(85);

var javascript_jquery = new ldBar("#javascript-jquery");
var load_javascript_jquery= document.getElementById('javascript-jquery').ldBar;
javascript_jquery.set(70);

var wordpress = new ldBar("#wordpress");
var load_wordpress= document.getElementById('wordpress').ldBar;
wordpress.set(75);

var php_mysql = new ldBar("#php-mysql");
var load_php_mysql= document.getElementById('php-mysql').ldBar;
php_mysql.set(70);

var asp_mssql = new ldBar("#asp-mssql");
var load_asp_mssql= document.getElementById('asp-mssql').ldBar;
asp_mssql.set(95);

var photoshop = new ldBar("#photoshop");
var load_photoshop= document.getElementById('photoshop').ldBar;
photoshop.set(85);

var illustrator = new ldBar("#illustrator");
var load_illustrator= document.getElementById('illustrator').ldBar;
illustrator.set(90);
/* ---------- Start Codes for Portfolio Filter ---------- */


/* ---------- Start Codes for Filter Portfolio Buttons ---------- */
filter("all") // Execute the function and show all columns
	function filter(c_port) {
		var x_port, i_port;
		x_port = document.getElementsByClassName("column");
		if (c_port == "all") c_port = "";
		// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
		for (i_port = 0; i_port < x_port.length; i_port++) {
			w3RemoveClass(x_port[i_port], "show");
				if (x_port[i_port].className.indexOf(c_port) > -1) w3AddClass(x_port[i_port], "show");
			}
		}

		// Show filtered elements
		function w3AddClass(element_port, name_port) {
			var i_port, arr1_port, arr2_port;
				arr1_port = element_port.className.split(" ");
			  	arr2_port = name_port.split(" ");
			  	for (i_port = 0; i_port < arr2_port.length; i_port++) {
			    	if (arr1_port.indexOf(arr2_port[i_port]) == -1) {
		      		element_port.className += " " + arr2_port[i_port];
		    	}
		  	}
		}

		// Hide elements that are not selected
		function w3RemoveClass(element_port, name_port) {
			var i_port, arr1_port, arr2_port;
				arr1_port = element_port.className.split(" ");
			  	arr2_port = name_port.split(" ");
			  	for (i_port = 0; i_port < arr2_port.length; i_port++) {
			    	while (arr1_port.indexOf(arr2_port[i_port]) > -1) {
			      	arr1_port.splice(arr1_port.indexOf(arr2_port[i_port]), 1); 
				}
			}
			element_port.className = arr1_port.join(" ");
		}
			
		// Add active class to the current button (PORTFOLIO SECTION)
		var portfolio = document.getElementById("portfolioselector");
		var portfolio_selectors = portfolio.getElementsByClassName("btn");
		for (var i_port = 0; i_port < portfolio_selectors.length; i_port++) {
			portfolio_selectors[i_port].addEventListener("click", function(){
			var current_port_active = document.getElementsByClassName("port-active");
			current_port_active[0].className = current_port_active[0].className.replace(" port-active", "");
		this.className += " port-active";
	});
};
/* ---------- Start Codes for Filter Portfolio Buttons ---------- */


/* ---------- Start Codes for Filter Services ---------- */
display("web")
	function display(c) {
		var x, i;
		x = document.getElementsByClassName("fade");
			if (c == "all") c = "";
			for (i = 0; i < x.length; i++) {
				w3RemoveClass(x[i], "show");
				if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
		}
	}

	function w3AddClass(element, name) {
		var i, arr1, arr2;
			arr1 = element.className.split(" ");
		  	arr2 = name.split(" ");
		  	for (i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) == -1) {
		      	element.className += " " + arr2[i];
			}
		}
	}

	function w3RemoveClass(element, name) {
		var i, arr1, arr2;
		arr1 = element.className.split(" ");
		arr2 = name.split(" ");
			for (i = 0; i < arr2.length; i++) {
			while (arr1.indexOf(arr2[i]) > -1) {
			  	arr1.splice(arr1.indexOf(arr2[i]), 1); 
			}
		}
		element.className = arr1.join(" ");
	}


	var service = document.getElementById("servicesselector");
	var services_selectors = service.getElementsByClassName("selectors");
	for (var i_service = 0; i_service < services_selectors.length; i_service++) {
		services_selectors[i_service].addEventListener("click", function(){
		var current_serv_active = document.getElementsByClassName("serv-active");
		current_serv_active[0].className = current_serv_active[0].className.replace(" serv-active", "");
		this.className += " serv-active";
	});
};
/* ---------- Start Codes for Filter Services ---------- */