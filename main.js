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

// -------- PRINTING OPERATORS --------

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    // -------- CLEAR BUTTON --------
    if (operator.innerHTML == "C") {
      screen.innerHTML = 0;
      miniScreen.innerHTML = 0;

      // -------- SHOW ONLY ONE OPERATOR --------
    } else if (
      screen.innerHTML.slice(-1) == "+" ||
      screen.innerHTML.slice(-1) == "-" ||
      screen.innerHTML.slice(-1) == "x" ||
      screen.innerHTML.slice(-1) == "/" ||
      screen.innerHTML.slice(-1) == "%" ||
      screen.innerHTML.slice(-1) == "+-"
    ) {
    } else {
      screen.innerHTML += e.target.innerHTML; // it also works with e.target.value, it will return an array of the buttons too
    }
  });
});

// -------- PRINTING NUMBERS --------

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (screen.textContent == 0) {
      screen.textContent = e.target.value;
    } else {
      screen.textContent += e.target.value;
    }
  });
});

// -------- PRINT MINI-SCREEN AFTER EQUAL --------

equal.addEventListener("click", () => {
  miniScreen.textContent = screen.textContent;
  screen.textContent = "RESULTADO";
});
