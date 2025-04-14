let calculatorVaribles = {value1: 0, value2: 5, operator: add};

const buttons = [
    {value: reset, display: "AC"},
    {value: invert, display: "+/-"},
    {value: percent, display: "%"},
    {type: 'calculation', value: divide, display: "/"},
    {value: 7, display: "7"},
    {value: 8, display: "8"},
    {value: 9, display: "9"},
    {type: 'calculation', value: multiply, display: "*"},
    {value: 4, display: "4"},
    {value: 5, display: "5"},
    {value: 6, display: "6"},
    {type: 'calculation', value: subtract, display: "-"},
    {value: 1, display: "1"},
    {value: 2, display: "2"},
    {value: 3, display: "3"},
    {type: 'calculation', value: add, display: "+"},
    {value: 0, display: "0"},
    {value: decimal, display: "."},
    {type: 'equals', value: equals, display: "="},

]
let storedValue = {
    v1 : "",
    v2 : "",
    operation: ""
};

let displayValue = "";


const calculatorContainer = document.getElementById("calculator-container");
const calculatorButtonContainer = calculatorContainer.querySelector(".inputs");
const calculatorOutput = calculatorContainer.querySelector(".output-display");

//Create all the button divs and display
buttons.forEach(button => {
    // Check if button is a operator or value (for naming the class)
    let divClassName = 
        typeof button.value === 'function' ? button.value.name : `number-${button.value}`;
    const buttonElementContainer = document.createElement("div");
    buttonElementContainer.classList.add("calc-button-border", divClassName)

    const buttonElement = document.createElement("div");
    buttonElement.classList.add("calc-button")
    buttonElement.textContent = button.display;

    buttonElement.addEventListener("click", () => {
        //If a 'function' button is clicked check which one and determine the 
        //appropriate functions to perform
        if(typeof button.value === 'function'){
            //DECIMAL BUTTON
            if(button.value === decimal && !calculatorOutput.textContent.includes(".")){
                calculatorOutput.textContent += ".";
                displayValue = calculatorOutput.textContent;
            }
            //PERCENT BUTTON
            else if(button.value === percent){
                calculatorOutput.textContent = calculatorOutput.textContent/100;
                displayValue = calculatorOutput.textContent;
            }
            //INVERT
            else if(button.value === invert){
                calculatorOutput.textContent = calculatorOutput.textContent*-1;
                displayValue = calculatorOutput.textContent;
            }
            //CLEAR
            else if(button.value === reset){
                calculatorOutput.textContent = "";
                displayValue = "";
                storedValue.v1 = "";
                storedValue.v2 = "";
            }
            //OPERATORS
            else if(button.type === 'calculation'){
                storeValueAndResetDisplay(button.value);
                console.table(storedValue)
                
                if(storedValue.v2 !== ""){
                    calculatorOutput.textContent = operate(storedValue.v1, storedValue.v2, button.value)
                }

            //EQUALS
            } else if (button.type === 'equals'){
                storedValue.v2 = displayValue;
                calculatorOutput.textContent = operate(storedValue.v1, storedValue.v2, storedValue.operation)
                displayValue = calculatorOutput.textContent;
                storedValue.v1 = ""
                storedValue.v2 = ""
            }
        // HANDLES NUMBER INPUT   
        } else {
            appendValueToDisplay(button);
            
        }
        
    }) 
    buttonElementContainer.append(buttonElement);
    calculatorButtonContainer.append(buttonElementContainer);


});


function appendValueToDisplay(button){
    displayValue += "" + button.value;
    calculatorOutput.textContent = displayValue;
}

function storeValueAndResetDisplay(operatorFunction){
    if (storedValue.v1 === "" && storedValue.v2 === ""){
        storedValue.v1 = displayValue;
    } 
    else if(storedValue.v2 === ""){
        storedValue.v2 = displayValue;
    }
   
    storedValue.operation = operatorFunction;


    displayValue = "";
}

function reset(){}
function percent(){}
function invert(){}
function decimal(){

}
function equals(){
    
    operate(storedValue.v1, storedValue.v2, storedValue.operation)
    
   
}

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
    let output =  operator(Number(val1), Number(val2))

    storedValue.v1 = output;
    storedValue.v2 = "";

    console.table(storedValue)
    return output;
}