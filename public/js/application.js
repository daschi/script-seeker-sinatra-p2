//Ajax steps
// 1. add listener
// 2. hit the right route
// 3. make sure response from server is correct
// 4. manipulate DOM

$(document).ready(function(){
	hideLetterCard();
	loginButtonListener();
	signupButtonListener();
	// submitLoginListener();
	showMap();
});

//add the jvector map
//TODO: Navigate to language page by clicking on region
var showMap = function(){
  $("#world-map").vectorMap({
  	map: "world_mill",
  	onRegionClick: viewLanguagePage
  });
}

//NOTE: Needs to check if the region clicked matches one of the languages in the database. i.e. if Farsi language has region_code IR
//I need to make this generalized to match any language/region
var viewLanguagePage = function(event, code){
	event.preventDefault();
	var map = $("div#world-map").vectorMap('get', 'mapObject');
	var region = map.getRegionName(code)
	
	// var url = "/languages"
	// var method = "POST"

	// var request = $.ajax({
	// 	url: url,
	// 	method: method,
	// 	dataType: "json"
	// })

	// request.done(function(response){
	// 	console.log(response);
	// })
	debugger
	// window.location = "/languages/1"

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

//ajax the POST /sessions page
//NOTE: I'm not sure I'm going to keep this ajax call, since there are now parts of the page I have to update using jquery like the logout button and the logged in as button showing. I think it makes more sense in this situation to just redirect the user back to homepage, but at least I got some good ajax & event delegation practice out of it!
// var submitLoginListener = function(){
// 	$('div.form-container').on("click", "form#login-form", function(e){
// 		e.preventDefault();
//   	var url = "/sessions"
//   	var method = "POST"
//   	var data = $(this).serialize()

//   	var request = $.ajax({
//   		url: url,
//   		method: method,
//   		data: data 
//   	}).success(function(data, status, jqXHR){
//   		var successData = JSON.parse(data)
//   		console.log(successData);
//   		if (successData["success"] == true){
//   			$('.user-form').hide();
//   			$('#show-login').text("Logged in as " + successData["email"]);
//   		}
//   	})

// 	});
// }

//Show more letter information
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
//AJAX submit the sign up form submission
//AJAX fix the login form submission
//AJAX language page to show underneath search bar
//Add a jvector map to index page that leads to language bar with specific languages based on country picked. Pick by language or pick by country feature.
//Add a canvas to draw on
//Format the letter card view
//Add some cool js animation to the letter cards
//Add some example words to the database per letter (ARGH)
