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

media.removeAttribute("controls");
controls.style.visibility = "visible";

clicked = false;
console.log(clicked);

function reduceControls() {
  poster.classList.replace("opacity-100", "opacity-0");

  controls.classList.remove("left-1/2");
  controls.classList.add("right-3");
  controls.classList.replace("top-1/2", "bottom-3");
  controls.classList.remove("-translate-y-1/2");
  controls.classList.remove("-translate-x-1/2");
  controls.classList.remove("-translate-x-1/2");

  controls.classList.replace("px-5", "px-4");
  controls.classList.replace("py-4", "py-3");
  controls.classList.replace("md:px-6", "px-4");
  controls.classList.replace("md:py-5", "py-3");
  play.classList.replace("size-7", "size-5");
  mute.classList.replace("size-7", "size-5");
  play.classList.replace("md:size-7", "md:size-6");
  mute.classList.replace("md:size-7", "md:size-6");
  fscreen.classList.replace("md:size-7", "md:size-6");
  controls.classList.add("opacity-60");
  document
    .getElementById("scrollArrow")
    .classList.replace("animate-bounce", "opacity-60");
  clicked = true;
  console.log(clicked);
}

function playPauseMedia() {
  if (media.paused) {
    plays.src = "assets/icons/pause.svg";
    media.play();
  } else {
    plays.src = "assets/icons/play.svg";
    media.pause();
  }

  if (clicked == false) {
    reduceControls();
  }
}

play.addEventListener("click", playPauseMedia);

function stopMedia() {
  media.pause();
  media.currentTime = 0;
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
  media.load();
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
