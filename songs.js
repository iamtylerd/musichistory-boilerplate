// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs.unshift("Big Poppa > by Notorious BIG");
// songs.push("Hey Jude > by The Beatles");

// // console.log(typeof(songs));
// var currentSong = "";

// for (var i = 0; i<songs.length; i++) {
// 	currentSong = songs[i];
// 	var cleanUp = currentSong.replace(/@|\(|\!|\*/g, '');
// 	var dashSong = cleanUp.replace(/>/g, '-');
// 	// console.log(dashSong);
// }


// var songArray = document.getElementsByClassName("song-array");

// for (var i = 0; i < songArray.length; i++) {
// 	if ([i] % 2 === 0) {
// 		songArray[i].classList.add("mintcream");
// 	} else {
// 		songArray[i].classList.add("seashell");
// 	};
// 	if ([i] <= 0) {
// 		songArray[i].classList.add("boldtext");
// 	};
// }
var addButton = document.getElementById("addButton");

// XHR

function songsLoaded () {
  // A bit more about what `this` is here. What is the execution context?
  var data = JSON.parse(this.responseText);
  console.log(data);

	var songDiv = document.getElementById("songId");
	var thing = "";

for (var i = 0; i < data.songs.length; i++) {
	thing += `<div class='song${i} song-array'>`;
	thing += `<h1>${data.songs[i].title}</h1>`;
	thing += "<ul class='song-details'>";
	thing += `<li>${data.songs[i].artist}</li>`;
	thing += `<li>${data.songs[i].album}</li>`;
	thing += `<li>${data.songs[i].genre}</li>`;
	thing += "</ul>";
	thing +=  `<button type="button" class="buttonClass">Delete</button>`;
	thing += "</div>";
	songDiv.innerHTML = thing
}
var songArray = document.getElementsByClassName("song-array");

for (var i = 0; i < songArray.length; i++) {
	if ([i] % 2 === 0) {
		songArray[i].classList.add("mintcream");
	} else {
		songArray[i].classList.add("seashell");
	};
	if ([i] <= 0) {
		songArray[i].classList.add("boldtext");
	};
}	

	var button = document.getElementsByClassName("buttonClass");

	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener("click", deleteDiv);
	}

	function deleteDiv (e) {
		console.log(e)
		e.path[1].remove();
	}
}

// End first function

// Add More Function
addEventListener("load", setup_click_handler);

function setup_click_handler () {
	addButton.addEventListener("click", click_handler) 
}

function click_handler(event) {
	var myRequest2 = new XMLHttpRequest();
	myRequest2.open("GET", "songs2.json");
	myRequest2.addEventListener("load", songsLoaded2);
	myRequest2.send();
}

function songsLoaded2 () {
  // A bit more about what `this` is here. What is the execution context?
  var data2	 = JSON.parse(this.responseText);
  console.log(data2);

	var songDiv = document.getElementById("songId");
	var thing = "";

for (var i = 0; i < data2.songs.length; i++) {
	thing += `<div class='song${i} song-array'>`;
	thing += `<h1>${data2.songs[i].title}</h1>`;
	thing += "<ul class='song-details'>";
	thing += `<li>${data2.songs[i].artist}</li>`;
	thing += `<li>${data2.songs[i].album}</li>`;
	thing += `<li>${data2.songs[i].genre}</li>`;
	thing += "</ul>";
	thing +=  `<button type="button" class="buttonClass">Delete</button>`;
	thing += "</div>";
	songDiv.innerHTML += thing
}
var songArray = document.getElementsByClassName("song-array");

for (var i = 0; i < songArray.length; i++) {
	if ([i] % 2 === 0) {
		songArray[i].classList.add("mintcream");
	} else {
		songArray[i].classList.add("seashell");
	};
	if ([i] <= 0) {
		songArray[i].classList.add("boldtext");
	};
}	

	var button = document.getElementsByClassName("buttonClass");

	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener("click", deleteDiv);
	}

	function deleteDiv (e) {
		console.log(e)
		e.path[1].remove();
	}
}

// addButton.addEventListener("click", function(e) {
// 	mysongsLoaded2();
// });

// function addMoreClick() {
// 	songsLoaded2();
// }


// Create an XHR object
var myRequest = new XMLHttpRequest();
// var myRequest2 = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", songsLoaded);
// myRequest2.addEventListener("load", songsLoaded2);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "songs.json");
// myRequest2.open("GET", "songs2.json");

// Tell the XHR object to start
myRequest.send();
// myRequest2.send();







