var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("Big Poppa > by Notorious BIG");
songs.push("Hey Jude > by The Beatles");

// console.log(typeof(songs));
var currentSong = "";

for (var i = 0; i<songs.length; i++) {
	currentSong = songs[i];
	var cleanUp = currentSong.replace(/@|\(|\!|\*/g, '');
	var dashSong = cleanUp.replace(/>/g, '-');
	console.log(dashSong);
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
