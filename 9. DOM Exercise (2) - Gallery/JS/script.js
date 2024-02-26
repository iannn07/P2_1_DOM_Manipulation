// Basic HTML Structure Declaration
const container = document.getElementById("container");

// HTML Content
const img_preview = container.querySelector(
  "main#main div#gallery div.image-wrapper img"
);
const img_thumb = container.querySelectorAll(
  "main#main div#gallery div.thumbnails img.thumb"
);

// Functions Transition
function hover(img_thumb, hover) {
  if (hover == "mouseover") {
    img_thumb.style.opacity = "0.75";
    img_thumb.style.transition = "all 0.125s";
  } else {
    img_thumb.style.opacity = "1";
    img_thumb.style.transition = "all 0.125s";
  }
}

function clicked(img_thumb) {
  img_thumb.style.opacity = "0.5";
  img_thumb.style.transition = "all 0.125s";
  setTimeout(() => {
    hover(img_thumb, "mouseover");
  }, 150);
}

// Event Listener
img_thumb.forEach((thumb) => {
  thumb.addEventListener("mouseover", () => {
    hover(thumb, "mouseover");
  });
  thumb.addEventListener("mouseout", () => {
    hover(thumb, "mouseout");
  });
  thumb.addEventListener("click", () => {
    clicked(thumb);
    img_preview.src = thumb.src;
    img_preview.classList.add("fade-in");
    setTimeout(() => {
      img_preview.classList.remove("fade-in");
    }, 300);
  });
});
