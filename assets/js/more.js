function scrollStart() {
  document.getElementById("content").scrollIntoView({
    behavior: "smooth",
  });
}

// function scrollStart() {
//   var element = document.getElementById("content");
//   var headerOffset = 20;
//   var elementPosition = element.getBoundingClientRect().top;
//   var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//   window.scrollTo({
//     top: offsetPosition,
//     behavior: "smooth",
//   });
// }

const comprarButton = document.getElementById("comprarButton");
const comprarPanel = document.getElementById("comprarPanel");
const closeButton = document.getElementById("closeButton");

comprarButton.addEventListener("click", function () {
  comprarPanel.classList.replace("translate-y-full", "translate-y-0");
});

closeButton.addEventListener("click", function () {
  comprarPanel.classList.replace("translate-y-0", "translate-y-full");
});
