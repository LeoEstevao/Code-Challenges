// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeats N times.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(string:string, repeats:number):string {
    if(typeof(string) != 'string' || repeats < 0)
        return string;

    // Create variables
    let textToEnc:string = string;
    let textIntoArr:string[] = [];
    
    for( let i = 0; i < repeats; i++ ){
        textIntoArr = textToEnc.split('');
        let even:string = ''; // Par
        let odd:string = ''; // Ímpar
        
        textIntoArr.map( (letter, index) => {
            index % 2 == 0? even += letter : odd += letter
        })

        textToEnc = odd + even

        console.log(`Encrypt input:${textToEnc}, Rounds count:${i + 1}`)
    }



    return textToEnc;
}


function decrypt(string:string, repeats: number):string {
    if(typeof(string) != 'string' || repeats < 0)
        return string;

    let textToDecrypt:string = string;
    let arr:string[] = [];

    // console.log(arr);
    for(let i = 0; i < repeats; i++){
        
        // Even indexes is the second part of encrypted output, then we will get the second half of the string until the end
        let evenIntoArr:string[] = textToDecrypt.slice(
            // Even numbers is the start index. In case of odd numbers of total indexes, even will have 1 more character. Then, we will round to floor
            Math.floor(textToDecrypt.length / 2)
            // Turn into array
            ).split('');

        // Odd indexes are the first part of the encrypted output, then we will get the first part of the string, until the half
        let oddIntoArr:string[] = textToDecrypt.slice(
            0, 
            // Odd numbers is not the start of index. In case of odd numbers of total indexes, odd will have 1 less character. Then, we will start from 0 to half, rounding to floor.
            Math.floor(textToDecrypt.length / 2)
            // Turn into array
            ).split('');
        

        // Map even characters, and returns then to the array[index * 2]
        evenIntoArr.map( (letter, index) => {
            arr[index * 2] = letter
        })
        
        // Map odd characters, and returns then to the array[index * 2 + 1]
        oddIntoArr.map( (letter, index) => {
            arr[index * 2 + 1] = letter
        })


        textToDecrypt = arr.join('')

        console.log(`Output decrypt: ${textToDecrypt}, Rounds count: ${i}`)
    }
    return textToDecrypt;
}

console.log(encrypt("This is a test!", 1)) // => hsi  etTi sats!
console.log(decrypt("hsi  etTi sats!", 1)); // => This is a test!
console.log(encrypt("012345", 3)) // =>  "135024"  ->  "304152"  ->  "012345"
console.log(decrypt("012345", 3)) // =>  "304152"  ->  "135024"  ->  "012345"
console.log(decrypt("", 1)) // =>  ''
console.log(decrypt("", -1)) // =>  ''