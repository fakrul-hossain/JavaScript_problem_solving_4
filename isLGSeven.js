// Third problem
// Take any number as input then subtract 7 from that number after subtraction if the subtraction is less than 7 then that number will be displayed and if the subtraction is equal to or greater than 7 then it will be multiplied by two with that number.

function isLGSeven(number) {
    if (typeof number != 'number') {
        return 'Please Input a Number'
    }
    subtractionResult = number - 7;
    if (subtractionResult < 7) {
        return subtractionResult;
    } else if(subtractionResult => 7){
        return number * 2;
    }
}
console.log(isLGSeven(15));