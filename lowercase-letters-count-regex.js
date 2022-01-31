// Your task is simply to count the total number of lowercase letters in a string.
function lowercaseCount (string) {
    return string.replace(/[^a-z]/g, '').length
}

console.log(lowercaseCount("abc")); // ===> 3
console.log(lowercaseCount("abcABC123")); // ===> 3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); // ===> 3
console.log(lowercaseCount("")); // ===> 0;
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); // ===> 0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")); // ===> 26