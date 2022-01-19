// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

function reverseWords(string) {
    // Create regex to store words and white spaces
    const regSpaces = /\s{1,}/g
    const regWords = /\S{1,}/g

    // If 0 white spaces, return empty array (to avoid NULL)
    const spaces = string.search(regSpaces) == -1? [] : string.match(regSpaces)

    const words = string.match(regWords, result => {
    })

    // Reversing the words inside of the array
    const reversedWords = words.map( word => {
        return word.split('').reverse().join('')
    })

    // Concatenating the reversed words and white spaces into a string
    const reversedString = reversedWords.reduce( (stack, element, index)=> {
        return spaces[index]? stack += element + spaces[index] : stack += element
    }, '');

    console.log(`
    ${string}
    ${reversedString}
    `)
}

reverseWords('Returns  the   text of the RegExp pattern  ')
reverseWords('apple')