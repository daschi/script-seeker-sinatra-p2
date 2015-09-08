//Ajax steps
// 1. add listener
// 2. hit the right route
// 3. make sure response from server is correct
// 4. manipulate DOM

$(document).ready(function(){
	hideLetterCard();
	loginButtonListener();
	signupButtonListener();
	letterListener();
	showMap();
});

var showMap = function(){
  $("#world-map").vectorMap({
  	map: "world_mill",
  	onRegionClick: grabLanguageByRegion
  });
}

var grabLanguageByRegion = function(event, code){
	event.preventDefault();
	var request = $.ajax({
		url: "/languages/" + code,
		method: "post"
	})

	request.done(function(response){
		var langObject = JSON.parse(response)
		var language = langObject[0]
		viewLanguagePage(language.id)
	})
}

var viewLanguagePage = function(languageId){
	window.location = "/languages/" + languageId
}

//Ajax the sessions/new page
var loginButtonListener = function(){
	$('a.cd-signin').on('click', function(e){
		e.preventDefault();
		var url = "/sessions/new"
		var method = "GET"

		var request = $.ajax({
			url: url,
			method: method,
			dataType: "HTML"
		}).done(function(response){
			// $(".form-group").hide();
			$(".user-form").hide();
			$(".form-group").append(response);
		})
	})
}

//ajax the users/new page
var signupButtonListener = function(){
	$('a.cd-signup').on('click', function(e){
		e.preventDefault();
		var url = "/users/new"
		var method = "GET"

		var request = $.ajax({
			url: url,
			method: method,
			dataType: "HTML"
		}).done(function(response){

			// $(".form-group").hide();
			$(".user-form").hide();
			$(".page-header").after(response);
		})
	})
}

//Set listener for each letter
 var letterListener = function(){
 	$('div.letter-container').on('click', function(event){
	var letterId = $(event.currentTarget).attr('id');
	var languageId = $('.language').attr('id');

	var url = "/languages/" + languageId + "/letters/" + letterId
	var method = 'GET'

	var request = $.ajax({
		url: url,
		method: method,
	})
	request.done(function(response){
		letter = JSON.parse(response);
		showLetterCard(letter);
	})
	request.fail(function(response){
		console.log("FAIL");
	})
})
}

//Show/hide each letter's card
var showLetterCard = function(letter){
	$('.lettercard').show();
	$('td#name').html(letter.name)
	$('td#isolated').html(letter.isolated)
	$('td#initial').html(letter.initial)
	$('td#medial').html(letter.medial)
	$('td#final').html(letter.final)
	$('audio').attr("src", letter.sound_path)
}

var hideLetterCard = function(){
	$('.lettercard').hide();
}

//TO DO:
//AJAX fix the login form submission DONE
//AJAX the language bar to show above each language page
//Add a jvector map to index page that leads to language bar with specific languages based on country picked. Pick by language or pick by country feature. DONE
//Add a canvas to draw on
//Format the letter card view DONE
//Add some cool js animation to the letter cards
//Add some example words to the database per letter 
//TESTING!!!!!