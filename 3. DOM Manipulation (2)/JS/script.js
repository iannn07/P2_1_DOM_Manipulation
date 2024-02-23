// In this DOM Manipulation (2), I'll remove the previous script and change it to be focused for this session

// getElementByID -> Element
const title = document.getElementById("title");
title.innerHTML = "Hi Ian!";
title.style.textAlign = "center";
title.style.backgroundColor = "white";

// Class List
const first_section = document.querySelector("section#first-section");
let text_2 = first_section.querySelector(".p-2");
text_2.classList.toggle("active");
console.log(text_2.classList.item(1));
console.log(text_2.classList.contains("active"));
// console.log(text_2.classList.replace("active", "inactive"));
// console.log(text_2.classList);