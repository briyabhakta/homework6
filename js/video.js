var video;
var volume;
var slider;
var mute;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video);

	volume = document.querySelector("#volume");
	console.log(video.volume);
	volume.innerHTML = (video.volume * 100) + '%';
	video.playbackRate = 1;
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate = video.playbackRate * 0.8;
  console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	if (video.ended) {
		video.currentTime = 0;
		video.playbackRate = 1;
	}

	console.log("Current location is "+ video.currentTime);
}


function mute() {
	let mute = document.querySelector("#mute");
	if (video.muted) {
		video.muted = false;
  	console.log("Changing to Unmuted");
		mute.innerHTML = "Mute"
	}
	else {
		video.muted = true;
		console.log("Changing to Muted");
		mute.innerHTML = "Unmute";
	}
}


function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume = slider.value / 100;
	console.log("Volume is " + slider.value / 100);
	volume.innerHTML = slider.value + '%';
}


function gray() {
	document.querySelector("video").className = "grayscale";
	console.log("In grayscale");
}

function color() {
	document.querySelector("video").classList.remove("grayscale");
	console.log("In color")
}
