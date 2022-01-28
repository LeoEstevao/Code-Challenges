function filterNumberList(arr) {

    // Filter the array
    return arr.filter( value => {
        // Return only numbers and non-negative values
        return typeof(value) == 'number' && value >= 0;
    })
};


console.log(filterNumberList([1,2,'a','b', -2])) //== [1,2]
console.log(filterNumberList([1,'a','b',0,15])) //== [1,0,15]
console.log(filterNumberList([1,2, -29, 'aasf','1','123',123])) //== [1,2,123]