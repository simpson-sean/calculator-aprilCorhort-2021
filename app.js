// import functions and grab DOM elements
//Addition
const addNum1El = document.getElementById('add-num1')
const addNum2El = document.getElementById('add-num2')
const addButton = document.getElementById('add')
const addResult = document.getElementById('add-result')
//Subtraction
const subNum1El = document.getElementById('sub-num1')
const subNum2El = document.getElementById('sub-num2')
const subButton = document.getElementById('subtract')
const subResult = document.getElementById('sub-result')
//Multiplication
const mulNum1El = document.getElementById('mul-num1')
const mulNum2El = document.getElementById('mul-num2')
const mulButton = document.getElementById('multiply')
const mulResult = document.getElementById('mul-result')
//Division
const divNum1El = document.getElementById('div-num1')
const divNum2El = document.getElementById('div-num2')
const divButton = document.getElementById('divide')
const divResult = document.getElementById('div-result')






// set event listeners to update state and DOM

addButton.addEventListener('click', () => {
    addResult.textContent = Number(addNum1El.value) + Number(addNum2El.value);
});

subButton.addEventListener('click', () => {
    subResult.textContent = Number(subNum1El.value) - Number(subNum2El.value);
});

mulButton.addEventListener('click', () => {
    mulResult.textContent = Number(mulNum1El.value) * Number(mulNum2El.value);
});

divButton.addEventListener('click', () => {
    divResult.textContent = Number(divNum1El.value) / Number(divNum2El.value);
});