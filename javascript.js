let calculatorVaribles = {value1: 0, value2: 5, operator: add};
const buttons = [
     {value: reset, display: "AC"},
    {value: invert, display: "+/-"},
     {value: percent, display: "%"},
    {value: divide, display: "/"},
     {value: 7, display: "7"},
     {value: 8, display: "8"},
     {value: 9, display: "9"},
     {value: multiply, display: "*"},
     {value: 4, display: "4"},
     {value: 5, display: "5"},
     {value: 6, display: "6"},
     {value: subtract, display: "-"},
     {value: 1, display: "1"},
     {value: 2, display: "2"},
     {value: 3, display: "3"},
     {value: add, display: "+"},
     {value: 0, display: "0"},
     {value: decimal, display: "."},
     {value: equals, display: "="},

]

const calculatorContainer = document.getElementById("calculator-container");
const calculatorButtonContainer = calculatorContainer.querySelector(".inputs");

buttons.forEach(button => {
    // Check if button is a operator or value (for naming the class)
    let divClassName = 
        typeof button.value === 'function' ? button.value.name : `number-${button.value}`;
    const buttonElementContainer = document.createElement("div");
    buttonElementContainer.classList.add("calc-button-border", divClassName)

    const buttonElement = document.createElement("div");
    buttonElement.classList.add("calc-button")
    buttonElement.textContent = button.display;

    buttonElementContainer.append(buttonElement);

    calculatorButtonContainer.append(buttonElementContainer);
});



function reset(){}
function percent(){}
function invert(){}
function decimal(){}
function equals(){}

function add(val1, val2){
    return val1 + val2;
}

function subtract(val1, val2){
    return val1 - val2;
}

function multiply(val1, val2){
    return val1 * val2;
}

function divide(val1, val2){
    return val1 / val2;
}

function operate(val1, val2, operator){
    return operator(val1, val2);
}