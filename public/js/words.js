$(document).ready(function(){
	getRussianPhrases();
	speakWordFromInput();
	speakWordFromTable();
}

//Speak word from input field
var speakWordFromInput = function(){
	document.getElementById("btnSpeak").addEventListener("click", function(event){
		event.preventDefault();
		var text = document.getElementById("inpSpeakMe").value
		responsiveVoice.speak(text, "Russian Female");
	});
};

//Speak word from table
var speakWordFromTable = function(){
	$("#word-body").on("click", "tr", function(){
		event.preventDefault();
		var text = event.target.innerText
		responsiveVoice.speak(text, "Russian Female");
	});
};

//Ajax call to grab data from Kimono, which was scraped from some Russian learning site
var getRussianPhrases = function(){
	$.ajax({
		url:"https://www.kimonolabs.com/api/e31t2jgq?apikey=9X1zfnWhK71ewfafn5raKAv7ebmYetHx",
		crossDomain: true,
		dataType: "jsonp",
		success: function (response) {
			var collection = response["results"]["collection1"]
		  	for (var i=0; i < collection.length; i++){
		  		$("tbody#word-body").append("<tr id="+i+"><td id='ru'>"+collection[i]['russian_words']+"</td></tr>");
		  		$("tr#"+i).append("<td id='phonetic'>"+collection[i]['pronunciation']+"</td><td id='en'>"+collection[i]['english_translation']+"</td>");
				}
		},
		error: function (xhr, status) {
		  //handle errors
		  console.log("error");
  	}
	});
}