// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.

function findUniqueNumber(arr) {
    // Store first and second numbers of arr
    const numberOne = arr[0];
    const numberTwo = arr[1];
    let differentNumber;

    
    if(numberOne == numberTwo){
        // Return number different from numberOne (or numberTwo)
        for(i=2; i < arr.length; i++) {
            if(numberOne != arr[i])
                differentNumber = arr[i];
        }
    return differentNumber;
    }

    // If the first and second numbers are different
        // Return the number different from the third number
    return differentNumber = arr[2] == numberOne ? numberTwo : numberOne;
    
}


console.log(findUniqueNumber([ 0, 1, 0 ]));
console.log(findUniqueNumber([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniqueNumber([ 1, 2, 1, 1, 1, 1 ]));
console.log(findUniqueNumber([ 2, 1, 1, 1, 1, 1 ]));
console.log(findUniqueNumber([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniqueNumber([ 3, 10, 3, 3, 3 ]));