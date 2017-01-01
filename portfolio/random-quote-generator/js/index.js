var getQuote = false;
$(document).ready(function() {
	newQuote();
});
var tweetLink = "https://twitter.com/intent/tweet?text=";

function tweet() {
	console.log(tweetLink);
	var feats = "location=yes,height=450,width=520,scrollbars=yes,status=yes";
	var win = window.open(tweetLink, "_blank", feats);
}

function newQuote() {
	$(".loading").css({
		"visibility": "visible",
		"animation": "rot .5s linear infinite"
	});
	if (!getQuote) {
		getQuote = true;
		$.ajax({
			headers: {
				"X-Mashape-Key": "tEthxoH7UpmshJEIan8MucKd4spCp1PYPjujsn5GcQvoK0eryB",
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
			success: function(response) {
				var res = JSON.parse(response);
				$(".text").slideUp(400, function() {
					$('#quote').text(" " + res.quote);
					$('#author').text("-" + res.author);
					$("#quote").addClass("fa-quote-left");
				}).slideDown(400);
				tweetLink = "https://twitter.com/intent/tweet?text=" + encodeURI(res.quote + " -" + res.author);
				getQuote = false;
				$(".loading").css({
					"visibility": "hidden",
					"animation": "rot .5s linear infinite"
				});
			}
		});
	}
}