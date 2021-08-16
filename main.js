// -------- VARIABLES ----------

let toggleBtn = document.getElementById("checkbox");
let mainContainer = document.getElementById("mainContainer");
let miniScreen = document.getElementById("miniScreen");
let screen = document.getElementById("screen");
let keyboardGrid = document.getElementById("keyboardGrid");
let key = document.querySelectorAll(".key");
let operator = document.querySelectorAll(".operator");
let number = document.querySelectorAll(".number");
let equal = document.getElementById("equal");
let label = document.getElementById("label");
let clear = document.getElementById("clear");

let keys = Array.from(key);
let operators = Array.from(operator);
let numbers = Array.from(number);

// -------- EVENT LISTENER CHANGING CLASSES --------

toggleBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("main-container--light");
  miniScreen.classList.toggle("mini-screen--light");
  screen.classList.toggle("screen--light");
  keyboardGrid.classList.toggle("keyboard-grid--light");
  keys.forEach((element) => {
    element.classList.toggle("key--light");
  });
  operators.forEach((element) => {
    element.classList.toggle("operator--light");
  });
  numbers.forEach((element) => {
    element.classList.toggle("number--light");
  });
  equal.classList.toggle("equal--light");
  label.classList.toggle("label--light");
});

// -------- CLEAR BUTTON --------
clear.addEventListener("click", () => {
  screen.innerHTML = "";
  miniScreen.innerHTML = "";
});

// -------- PRINTING NUMBERS --------

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    screen.textContent += e.target.textContent;

    if (key.textContent == "C") {
      screen.innerHTML = "";
    }
  });
});
