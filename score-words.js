// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// All letters will be lowercase and all inputs will be valid.

function highScoreWord(string) {
    // Creating alphabet, to use it's index
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // Turn string into arr
    const arrWords = string.split(' ');

    let lastWordScore = 0;
    let highestScoreWord = 0;
    
    // Reduce arr of words, to return the word with highest score
    const highestScoredWord = arrWords.reduce((highestScoredWord, word) => {
    
        // Pass the actual word, to check and return it's score
        const scoreWord = word.split('').reduce( (scoreWord, letter) => {
            // console.log(letter)
            return scoreWord += alphabet.indexOf(letter) + 1
        }, 0);

        // check the actual and the last words scores and
        
        if(scoreWord > highestScoreWord){
            // Actual word >
            
            // Store the lastWordScore after every run!!
            lastWordScore = scoreWord

            // Save the new word score
            highestScoreWord = scoreWord

            return highestScoredWord = word;
        }
        // Actual word <

        // Store the lastWordScore after every run!!
        lastWordScore = scoreWord

        return highestScoredWord = highestScoredWord;
    

    }, undefined)
    return highestScoredWord;
}

console.log(highScoreWord('man i need a taxi up to ubud'));
console.log(highScoreWord('what time are we climbing up the volcano'));
console.log(highScoreWord('a b c d e f g h i j k l m n o p q r s t u v w x y z'));