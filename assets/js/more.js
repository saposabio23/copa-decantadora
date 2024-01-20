function scrollStart() {
  document.getElementById("content").scrollIntoView({
    behavior: "smooth",
  });
}

const comprarButton = document.getElementById("comprarButton");
const comprarPanel = document.getElementById("comprarPanel");
const closeButton = document.getElementById("closeButton");

comprarButton.addEventListener("click", function () {
  comprarPanel.classList.replace("translate-y-full", "translate-y-0");
});

closeButton.addEventListener("click", function () {
  comprarPanel.classList.replace("translate-y-0", "translate-y-full");
});
