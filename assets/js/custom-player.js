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

function playPauseMedia() {
  if (media.paused) {
    //   play.setAttribute("data-icon", "u");
    plays.src = "assets/icons/pause.svg";
    media.play();
  } else {
    //   play.setAttribute("data-icon", "P");
    plays.src = "assets/icons/play.svg";
    media.pause();
  }

  if (clicked == false) {
    poster.classList.replace("opacity-100", "opacity-0");

    controls.classList.remove("left-1/2");
    controls.classList.add("right-3");
    controls.classList.replace("top-1/2", "bottom-3");
    controls.classList.remove("-translate-y-1/2");
    controls.classList.remove("-translate-x-1/2");
    controls.classList.remove("-translate-x-1/2");

    controls.classList.replace("px-6", "px-4");
    controls.classList.replace("py-5", "py-3");
    play.classList.replace("size-7", "size-5");
    mute.classList.replace("size-7", "size-5");
    controls.classList.add("opacity-60");
    document
      .getElementById("scrollArrow")
      .classList.replace("animate-bounce", "opacity-60");
    clicked = true;
    console.log(clicked);
  }
}

play.addEventListener("click", playPauseMedia);

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  // play.setAttribute("data-icon", "P");
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

document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    screen.src = "assets/icons/full.svg";
  }
  if (event.code === "F") {
    launchIntoFullscreen(document.querySelector(".player"));
  }
});
