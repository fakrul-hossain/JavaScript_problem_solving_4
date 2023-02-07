// Second problem
// Takes a string, returns even if the sum of the characters in the string is even, and returns odd if it is odd.

function evenOdd(peopleName) {
    if (typeof peopleName != 'string' || peopleName.length == 0) {
        return 'Please  Input a String'
    } else if (peopleName.length % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
const result = evenOdd('Batch7');
console.log(result);
