let toggleBtn = document.getElementById('checkbox');
let mainContainer = document.getElementById('mainContainer');
let miniScreen = document.getElementById('miniScreen');
let screen = document.getElementById('screen');
let keyboardGrid = document.getElementById('keyboardGrid');
let key = document.querySelectorAll('.key');
let operator = document.querySelectorAll('.operator');


let keyNew = Array.from(key);

console.log(keyNew)

toggleBtn.addEventListener('click', () => {
    mainContainer.classList.toggle('main-container--light');
    miniScreen.classList.toggle('mini-screen--light');
    screen.classList.toggle('screen--light');
    keyboardGrid.classList.toggle('keyboard-grid--light');
    keyNew.forEach(element => {
        element.classList.toggle('key--light');
        operator.classList.toggle('operator--light');
    });
    
    
});