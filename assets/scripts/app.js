const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getInputValue() {
    return +userInput.value;
}

function printResult(operator, initialValue, enteredNum) {
    const calDesc = `${initialValue} ${operator} ${enteredNum}`;
    outputResult(currentResult, calDesc);
}

function logInOperands(operator, oldRes, operand, newRes) {
    const logEntry = {
        operator: operator,
        prevRes: oldRes,
        enteredNum: operand,
        result: newRes
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNum = getInputValue();
    const initialValue = currentResult;
    currentResult +=  enteredNum;
    printResult('+', initialValue, enteredNum); 
    logInOperands('ADD', initialValue, enteredNum, currentResult);
}

function substract() {
    const enteredNum = getInputValue();
    const initialValue = currentResult;
    currentResult -=  enteredNum;
    printResult('-', initialValue, enteredNum); 
    logInOperands('SUBTRACT', initialValue, enteredNum, currentResult);
}

function divide() {
    const enteredNum = getInputValue();
    const initialValue = currentResult;
    currentResult /= enteredNum;
    printResult('/', initialValue, enteredNum); 
    logInOperands('DIVIDE', initialValue, enteredNum, currentResult);
}

function multiply() {
    const enteredNum = getInputValue();
    const initialValue = currentResult;
    currentResult *= enteredNum;
    printResult('*', initialValue, enteredNum); 
    logInOperands('MULTIPLY', initialValue, enteredNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
