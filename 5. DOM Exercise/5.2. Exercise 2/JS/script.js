// Basic HTML Structure
const container = document.getElementById("container");

// HTML Content
const btn_wrapper = container.querySelector(
  "footer#footer div#panel div.panel-button-wrapper"
);
const result = container.querySelector("div#result p.result");

const comp_icon = container.querySelector(
  "main#main div#computer-area div.icon"
);
const comp_rock_icon = comp_icon.querySelector("div.rock-icon");
const comp_paper_icon = comp_icon.querySelector("div.paper-icon");
const comp_scissors_icon = comp_icon.querySelector("div.scissors-icon");

const player_icon = container.querySelector(
  "main#main div#player-area div.icon"
);
const player_rock_icon = player_icon.querySelector("div.rock-icon");
const player_paper_icon = player_icon.querySelector("div.paper-icon");
const player_scissors_icon = player_icon.querySelector("div.scissors-icon");

// Functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  const comp = getRandomNumber(1, 3);

  if (comp == 1) return "rock";
  else if (comp == 2) return "paper";
  return "scissors";
}

function updateComputerIcon(computer) {
  switch (computer) {
    case "rock":
      comp_scissors_icon.classList.remove("show");
      comp_paper_icon.classList.remove("show");

      comp_rock_icon.classList.add("show");
      break;
    case "paper":
      comp_rock_icon.classList.remove("show");
      comp_scissors_icon.classList.remove("show");

      comp_paper_icon.classList.add("show");
      break;
    case "scissors":
      comp_paper_icon.classList.remove("show");
      comp_rock_icon.classList.remove("show");

      comp_scissors_icon.classList.add("show");
      break;
    default:
      break;
  }
}

function updatePlayerIcon(player) {
  switch (player) {
    case "rock":
      player_scissors_icon.classList.remove("show");
      player_paper_icon.classList.remove("show");

      player_rock_icon.classList.add("show");
      break;
    case "paper":
      player_rock_icon.classList.remove("show");
      player_scissors_icon.classList.remove("show");

      player_paper_icon.classList.add("show");
      break;
    case "scissors":
      player_paper_icon.classList.remove("show");
      player_rock_icon.classList.remove("show");

      player_scissors_icon.classList.add("show");
      break;
    default:
      break;
  }
}

function showIcon(computer, player) {
  updateComputerIcon(computer);
  updatePlayerIcon(player);
}

function gameRules(computer, player) {
  showIcon(computer, player);
  if (computer == player) return "Tie!";
  else if (
    (computer == "rock" && player == "scissors") ||
    (computer == "scissors" && player == "paper") ||
    (computer == "paper" && player == "rock")
  )
    return "Computer Wins!";
  return "You Win!";
}

// Get buttons
const rockBtn = btn_wrapper.querySelector("button.rock");
const paperBtn = btn_wrapper.querySelector("button.paper");
const scissorsBtn = btn_wrapper.querySelector("button.scissors");

// Function for transition
function hover(btn, hover) {
  if (hover == "mouseover") {
    btn.style.backgroundColor = "#222222";
    btn.style.transition = "all 0.125s";
  } else {
    btn.style.backgroundColor = "";
    btn.style.transition = "all 0.125s";
  }
}

function clicked(btn) {
  btn.style.backgroundColor = "#3d3d3d";
  btn.style.borderColor = "white";
  btn.style.transition =
    "background-color 0.15s ease-in-out, border-color 0.1s ease-in-out";
  setTimeout(() => {
    btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    hover(btn, "mouseover");
  }, 150);
  setTimeout(() => {
    btn.style.borderColor = "#272727";
  }, 100);
}

function pressed(btn) {
  btn.style.backgroundColor = "#3d3d3d";
  btn.style.borderColor = "white";
  btn.style.transition =
    "background-color 0.15s ease-in-out, border-color 0.1s ease-in-out";
  setTimeout(() => {
    btn.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }, 150);
  setTimeout(() => {
    btn.style.borderColor = "#272727";
  }, 100);
}

// Class Object for Click
class RPS_Button {
  constructor(button, choice) {
    this.button = button;
    this.choice = choice;
  }

  click() {
    this.button.addEventListener("mouseover", () => {
      hover(this.button, "mouseover");
    });
    this.button.addEventListener("mouseout", () => {
      hover(this.button, "mouseout");
    });
    this.button.addEventListener("click", () => {
      clicked(this.button);
      const comp = getComputerChoice();
      result.innerHTML = `Result: ${gameRules(comp, this.choice)}`;
    });
  }
}

const RPS_List = [
  new RPS_Button(rockBtn, "rock"),
  new RPS_Button(paperBtn, "paper"),
  new RPS_Button(scissorsBtn, "scissors"),
];

RPS_List.forEach((button) => button.click());

// Event Listeners - For Keyboard
window.addEventListener("keydown", (event) => {
  const comp = getComputerChoice();
  switch (event.key.toUpperCase()) {
    case "R":
      pressed(rockBtn);
      const rock = "rock";
      result.innerHTML = `Result: ${gameRules(comp, rock)}`;
      break;
    case "P":
      pressed(paperBtn);
      const paper = "paper";
      result.innerHTML = `Result: ${gameRules(comp, paper)}`;
      break;
    case "S":
      pressed(scissorsBtn);
      const scissors = "scissors";
      result.innerHTML = `Result: ${gameRules(comp, scissors)}`;
      break;
    default:
      break;
  }
});
