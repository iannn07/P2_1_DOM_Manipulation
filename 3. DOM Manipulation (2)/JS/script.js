// In this DOM Manipulation (2), I'll remove the previous script and change it to be focused for this session

// getElementByID -> Element
const title = document.getElementById("title");
title.innerHTML = "Hi Ian!";
title.style.textAlign = "center";
title.style.backgroundColor = "white";

// createElement
const newText = document.createElement("p");
let newTextValue = document.createTextNode("I am new Text!");

newText.appendChild(newTextValue);

// Let's store this new element in a variable
const first_section = document.querySelector("main section#first-section");
first_section.appendChild(newText);

// insertBefore
const newLi = document.createElement("li");
let newLiValue = document.createTextNode("I am new LI!");
newLi.appendChild(newLiValue);

// Let's store this to the li element
const second_section_ul = document.querySelector("main section#second-section ul");
const second_section_li_2 = second_section_ul.querySelector("li:nth-child(2)");
second_section_ul.insertBefore(newLi, second_section_li_2);

// removeChild
let text_3 = document.querySelector("main section#first-section p.p-3");
first_section.removeChild(text_3);

// replaceChild
const second_section = document.querySelector("main section#second-section");
let text_4 = second_section.querySelector("p");

let new_text_4_attribute = document.createElement("h1");
let new_text_4_value = document.createTextNode("I am new text 4!");

new_text_4_attribute.appendChild(new_text_4_value);

second_section.replaceChild(new_text_4_attribute, text_4)

text_4 = second_section.querySelector("h1");
text_4.style.textAlign = "center";

newText.style.backgroundColor = "lightgrey";
newLi.style.backgroundColor = "lightgrey";
text_4.style.backgroundColor = "lightgrey";