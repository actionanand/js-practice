const defaultResult = 0;
let currentResult = defaultResult;

function getInputValue() {
    return +userInput.value;
}

function add() {
    const enteredNum = getInputValue();
    const calDesc = `${currentResult} + ${enteredNum}`;
    currentResult = currentResult + enteredNum;
    outputResult(currentResult, calDesc);
}

addBtn.addEventListener('click', add);
