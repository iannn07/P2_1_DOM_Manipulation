// Just like the DOM Manipulation (2), I'll remove the previous script and make it to be default

// getElementByID -> Element
const title = document.getElementById("title");
title.innerHTML = "Hi Ian!";
title.style.textAlign = "center";
title.style.backgroundColor = "white";

// eventHandler - Element Method
const text_3 = document.querySelector("main section#first-section p.p-3");

// This is a regular function
function changeText3() {
  text_3.innerHTML = "I changed!";
}

// This is an anonymous function
text_3.onclick = function () {
  changeText3();
  text_3.style.backgroundColor = "#0f0f0f";
  text_3.style.color = "#f4f4f4";
  text_3.style.textAlign = "center";
};

// eventHandler - addEventListener
const item_button = document.querySelector(
  "main section#second-section button.btn"
);

// Used for Incremental Number in Items
let item_counter = 4;

function add_new_item() {
  const second_section_ul = document.querySelector(
    "main section#second-section ul"
  );

  const li_new_item = document.createElement("li");
  let li_new_item_value = document.createTextNode(`New Item ${item_counter}`);

  li_new_item.appendChild(li_new_item_value);

  second_section_ul.appendChild(li_new_item);

  item_counter++;
}

// Don't forget to NOT use the parentheses
item_button.addEventListener("click", add_new_item);

// Event Handler vs Event Listener
const text_2 = document.querySelector("main section#first-section p.p-2");
const item_1 = document.querySelector(
  "main section#second-section li:nth-child(1)"
);

// Event Handler
// This function will be replaced by
text_2.onclick = function () {
  text_2.innerHTML = "I changed!";
};
// This function
text_2.onclick = function () {
  text_2.style.color = "red";
};

// Event Listener
// This function will be appended by
item_1.addEventListener("click", function () {
  item_1.innerHTML = "I changed!";
});
// This function
item_1.addEventListener("click", function () {
  item_1.style.color = "red";
});

// Toggle element
const text_4 = document.querySelector("main section#first-section p.p-4");
text_4.addEventListener("click", function () {
  text_4.classList.toggle("active");
  if (text_4.classList.contains("active")) {
      text_4.style.backgroundColor = "lightgrey";
  } else {
      text_4.style.backgroundColor = "";
  }
});
