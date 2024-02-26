// Basic HTML Structure Declaration
const container = document.getElementById("container");

// HTML Content
const btn = container.querySelector("main#main div.btn button");

function setRandomColor() {
  btn.style.backgroundColor = "#3d3d3d";
  btn.style.borderColor = "white";
  btn.style.transition =
    "background-color 0.15s ease-in-out, border-color 0.1s ease-in-out";

  // Use this to set the BG Color back to the default
  setTimeout(() => {
    btn.style.backgroundColor = "#222222";
  }, 150);
  setTimeout(() => {
    btn.style.borderColor = "#272727";
  }, 100);
}

// Event Listener
btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "#222222";
  btn.style.transition = "all 0.125s";
});

btn.addEventListener("mouseout", function () {
  btn.style.backgroundColor = "";
  btn.style.transition = "all 0.125s";
});

btn.addEventListener("click", setRandomColor);
