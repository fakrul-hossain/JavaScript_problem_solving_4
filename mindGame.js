// First Problem
// addition, subtraction, multiplication, and division using functions.

function mindGame(inputOfNumber) {
    if (typeof inputOfNumber != 'number') {
        return 'Please  Input a Number';
    }
    multiplicationResult = inputOfNumber * 3;
    additionResult = multiplicationResult + 10;
    divisionResult = additionResult / 2;
    subtractionResult = divisionResult - 5;
    totalResult = subtractionResult;
    return totalResult;
}
const result = mindGame(5);
console.log(result);
