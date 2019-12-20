const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let mathOperator;

function calcResult(operatorType) {
    const enteredNum = getInputValue();
    if(!enteredNum) {
        return;
    }
    const initialValue = currentResult;
    if(operatorType === 'ADD') {
        currentResult +=  enteredNum;
        mathOperator = '+'
    } else if(operatorType === 'SUBTRACT') {
        currentResult -=  enteredNum;
        mathOperator = '-'
    } else if(operatorType === 'MULTIPLY') {
        currentResult *=  enteredNum;
        mathOperator = '*'
    } else if(operatorType === 'DIVIDE') {
        currentResult /=  enteredNum;
        mathOperator = '/'
    }
    printResult(mathOperator, initialValue, enteredNum); 
    logInOperands(operatorType, initialValue, enteredNum, currentResult);
}

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
    calcResult('ADD');
}

function substract() {
    calcResult('SUBTRACT');
}

function divide() {
    calcResult('DIVIDE');
}

function multiply() {
    calcResult('MULTIPLY');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
