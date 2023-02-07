// fourth problem
// Extracting negative values from an array using functions.

function findingBadData(numberOfArray) {
    if (!Array.isArray(numberOfArray)) {
        return 'Please  Input a Array'
    }
    let badData = 0;
    for (let i = 0; i < numberOfArray.length; i++) {
        if (numberOfArray[i] < 0 ) {
            badData++
        }
        
    }
    return badData;
}

const numberOfArray = [ -4,2, -5, -7, -13 ];
console.log(findingBadData(numberOfArray));