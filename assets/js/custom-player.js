const media = document.querySelector("video");
const controls = document.querySelector(".controls");

const play = document.querySelector(".play");
const mute = document.querySelector(".mute");

const timerWrapper = document.querySelector(".timer");
const timerBar = document.querySelector(".timer div");

const plays = document.getElementById("plays");
const sound = document.getElementById("sound");

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
    controls.classList.remove("left-1/2");
    controls.classList.add("right-5");
    controls.classList.replace("top-1/2", "bottom-5");
    // controls.classList.replace("absolute", "fixed");
    controls.classList.remove("-translate-y-1/2");
    controls.classList.remove("-translate-x-1/2");
    controls.classList.remove("-translate-x-1/2");

    controls.classList.remove("lg:px-6");
    controls.classList.remove("lg:py-5");
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
