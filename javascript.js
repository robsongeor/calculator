let calculatorVaribles = {value1: 0, value2: 5, operator: add};

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