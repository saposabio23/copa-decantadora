const media = document.querySelector("video");
const controls = document.querySelector(".controls");

const play = document.querySelector(".play");
const mute = document.querySelector(".mute");
const fscreen = document.querySelector(".fscreen");

const timerWrapper = document.querySelector(".timer");
const timerBar = document.querySelector(".timer div");

const plays = document.getElementById("plays");
const sound = document.getElementById("sound");
const screen = document.getElementById("screen");

const poster = document.getElementById("poster");
const scrollArrow = document.getElementById("scrollArrow");

media.removeAttribute("controls");
controls.style.visibility = "visible";

var isPlayed = false;

function reduceControls() {
  isPlayed = true;
  poster.classList.replace("opacity-100", "opacity-0");
  scrollArrow.classList.replace("opacity-100", "opacity-60");
  playPauseMedia();
  setTimeout(function () {
    poster.classList.add("hidden");
  }, 1000);
}

function playPauseMedia() {
  if (media.paused) {
    plays.src = "assets/icons/pause.svg";
    media.play();
  } else {
    plays.src = "assets/icons/play.svg";
    media.pause();
  }
}

play.addEventListener("click", playPauseMedia);

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  isPlaying = false;
}
media.addEventListener("ended", stopMedia);

function setTime() {
  const barLength =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = `${barLength}px`;
}
media.addEventListener("timeupdate", setTime);

function muteMedia() {
  if (media.muted) {
    sound.src = "assets/icons/sound.svg";
    media.muted = false;
  } else {
    sound.src = "assets/icons/mute.svg";
    media.muted = true;
  }
}
mute.addEventListener("click", muteMedia);

media.addEventListener("ended", function () {
  poster.classList.replace("opacity-0", "opacity-100");
  poster.classList.remove("hidden");
  scrollStart()
});

window.addEventListener("scroll", function () {
  console.log(isPlayed);
  if (window.scrollY > (window.innerHeight / 100) * 70) {
    media.pause();
    plays.src = "assets/icons/play.svg";
  } else if (
    isPlayed == true &&
    window.scrollY < (window.innerHeight / 100) * 30
  ) {
    media.play();
    plays.src = "assets/icons/pause.svg";
  }
});

// GOING FULLSCREEN
function goFullscreen() {
  const fullscreenElement =
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement;
  if (fullscreenElement) {
    exitFullscreen();
  } else {
    launchIntoFullscreen(document.querySelector(".player"));
  }
}

function launchIntoFullscreen(element) {
  screen.src = "assets/icons/nofull.svg";
  document
    .getElementById("scrollArrow")
    .classList.replace("opacity-100", "opacity-0");
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  screen.src = "assets/icons/full.svg";
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
  document
    .getElementById("scrollArrow")
    .classList.replace("opacity-0", "opacity-100");
}

fscreen.addEventListener("click", goFullscreen);

// KEY SHORTCUTS FOR THE PLAYER
function scrollStart() {
  document.getElementById("content").scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    playPauseMedia();
  } else if (event.code === "KeyF") {
    goFullscreen();
  } else if (event.code === "KeyM") {
    muteMedia();
  } else if (event.code === "ArrowDown") {
    event.preventDefault();
    scrollStart();
  }
});

// DETECT WHEN EXIT FULLSCREN

if (document.addEventListener) {
  document.addEventListener("fullscreenchange", exitHandler, false);
  document.addEventListener("mozfullscreenchange", exitHandler, false);
  document.addEventListener("MSFullscreenChange", exitHandler, false);
  document.addEventListener("webkitfullscreenchange", exitHandler, false);
}

function exitHandler() {
  if (
    !document.webkitIsFullScreen &&
    !document.mozFullScreen &&
    !document.msFullscreenElement
  ) {
    screen.src = "assets/icons/full.svg";
  }
}

// BOTON DE COMPRA
const comprarButton = document.getElementById("comprarButton");
const comprarPanel = document.getElementById("comprarPanel");
const closeButton = document.getElementById("closeButton");

comprarButton.addEventListener("click", function () {
  comprarPanel.classList.replace("translate-y-full", "translate-y-0");
});

closeButton.addEventListener("click", function () {
  comprarPanel.classList.replace("translate-y-0", "translate-y-full");
});


// SLIDEWHOW PREVIEW
const imgElement = document.getElementById('slideshow-image');
const images = ['galeria-2.webp', 'foto1.webp', 'copa-photo-frontal-2.webp', 'galeria-4.webp', 'frontal2.webp']; // List of image sources
let currentIndex = 0;

function changeImage() {
  // Fade out
  imgElement.classList.remove('show');

  setTimeout(() => {
    // Change the image source after fade out
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = "media/" + images[currentIndex];

    // Fade in
    imgElement.classList.add('show');
  }, 1000); // Match this delay with the fade out transition time (1 second)
}

// Initial fade in
imgElement.classList.add('show');

// Change image every 10 seconds
setInterval(changeImage, 5000);