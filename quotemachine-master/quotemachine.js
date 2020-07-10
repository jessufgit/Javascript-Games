/* jshint esversion: 6 */

//Array of quotes
var randomquote = ["'It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.' --- Madeleine Albright", 
		   "'Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.' --- Chimamanda Ngozi Adichie", 
		   "'Feminism isn\'t about making women strong. Women are already strong. It\'s about changing the way the world perceives that strength.' --- G.D. Anderson",
		  "'No country can ever truly flourish if it stifles the potential of its women and deprives itself of the contributions of half its citizens.' --- Michelle Obama",
		  "'The best protection any woman can have... is courage.' --- Elizabeth Cady Stanton", 
		  "'If you want something said, ask a man; if you want something done, ask a woman.' --- Margaret Thatcher", 
		  "'The emerging woman ... will be strong-minded, strong-hearted, strong-souled, and strong-bodied... strength and beauty must go together.' --- Louisa May Alcott"];



$(document).ready(function() {
	$('#originalButton').click(function randomWholeNum() { //this button randomly generates a quote from the array and puts it in the quote space
		var randomNum = Math.floor(Math.random()*randomquote.length);
		$("#quotespace").text(randomquote[randomNum]);	
	});
		$('#OtherJSONbutton').click(function() {
      var quotespace = document.querySelector('#quotespace');
      var requestURL = 'https://jessufgit.github.io/quotemachine/quote.json';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      request.onload = function() {
  		  var newquotes = request.response;
  		  populateOtherHeader(newquotes);
	   };
	  function populateOtherHeader(jsonObj) {
			var randomNum = Math.floor(Math.random()*randomquote.length);
			console.log(randomNum);
			var quote = jsonObj['famousquotes'][randomNum]['quote'];
			var author = jsonObj['famousquotes'][randomNum]['author'];
	  		$("#quotespace").text(quote + " --- " + author);
    		}
  });
  $('.twitter-share-button').click(function() {
    		var tweetItOut = $("#quotespace").text();
    		window.open('https://twitter.com/intent/tweet?text="' + tweetItOut + '"', '_blank');
 	 });
});
