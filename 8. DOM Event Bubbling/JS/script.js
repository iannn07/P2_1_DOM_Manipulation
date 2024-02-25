
const container = document.querySelector("main#main");
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    event.target.parentElement.style.display = "none";
    event.preventDefault();
    event.stopPropagation();
  }
})