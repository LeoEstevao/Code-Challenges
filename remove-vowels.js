// Remove vowels from trolls comments

function takeVowel(string) {
    // Replace every vowel (upper/lowerCase) to ''
    return string.replace(/(a|e|i|o|u)/gi, '');
}


console.log(takeVowel("This website is for a losers LOL!"))
console.log(takeVowel("No offense but,\nYour writing is among the worst I've ever read"))