var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	updateVolInfo();

});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
	console.log("Current location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	updateVolInfo();
});

let videoElement = document.querySelector(".video");

document.querySelector("#vintage").addEventListener("click", function() {
	videoElement.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    videoElement.classList.remove("oldSchool"); 
});

function updateVolInfo() {
    var volumeDisplay = document.querySelector("#volume");
    var volumePercentage = Math.round(video.volume * 100);
    volumeDisplay.textContent = volumePercentage + "%";
}