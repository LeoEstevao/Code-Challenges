function capitalizeWords(string) {

    // split
        const arrStr = string.split(' ');

        // /start of string[a~z lowerCase]{1 repetition}/
        const firstLetterRegex = /^[a-z]{1}/

        // Map to return every regex matched to uppercase
        const arrUpperCased = arrStr.map( str => {
            return str.replace(firstLetterRegex, str[0].toUpperCase())
        } )
        
    // Join, to return the array to string
    return arrUpperCased.join(' ');    
}

console.log(capitalizeWords("How can mirrors be real if our eyes aren't real"))
console.log(capitalizeWords("your task is to convert strings"))
console.log(capitalizeWords("a b c d e f g h i j k l m n o p q r s t u v w x y z"))
