/*Young's Cheat Sheet - */


/*libraries - written sets of external code that users can access.*/
	/*Create an external file that will be included in <head> part of HTML file:*/  jqueryassn.js
	/*Inside this file I have used the examples from homework*/
	$(document).ready(function() {
				$('img').fadeToggle(4000);
			});


	/*you can use a <script> tag to call the function.*/
	<script>
			$(document).ready(function() {
				$('p')
				$('div').slideDown('slow');
			});


/*JQuery - a javascript library designed to simplify client-side scripting of HTML.
	a.  to use Jquery library, include a copy in the <head> section of the HTML file.
	b.  example - */<script src="http://ajax.googleapis.
com/ajax/libs/jquery/1.10.2/jquery.min.
js"></script>



/*DOM - way to interact with and represent objects in HTML.
	a.  some examples -*/ $("h2") or $("img")
	/*b.  by calling $, access Jquery library's function.*/




/*$(document).ready() - code doesn't run until doc fires ready event.
	a.  click event example*/
	$(document).ready(function() {
			$("h4").click(function() {
					$("h4").slideUp('slow');
			});
	});

