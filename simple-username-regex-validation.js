// Write a simples regex to validate a username. Only accepts:
// lowercase letters, numbers, underscore, min 4 chars, max 16 chars.

function validateUsername(username) {
    const regex = /^[a-z0-9_]{4,16}$/;

    const isUsernameValid = regex.test(username)

    return isUsernameValid;
}


console.log(validateUsername('asddsa'))                               // true
console.log(validateUsername('a'))                                    // false
console.log(validateUsername('Hass'))                                 // false
console.log(validateUsername('Hasd_12assssssasasasasasaasasasasas'))  // false
console.log(validateUsername(''))                                     // false
console.log(validateUsername('____'))                                 // true
console.log(validateUsername('012'))                                  // false
console.log(validateUsername('p1pp1'))                                // true
console.log(validateUsername('asd43 34'))                             // false
console.log(validateUsername('asd43_34'))                             // true