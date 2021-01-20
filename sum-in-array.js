// Receba um array de números e considere que este array de números represente um número inteiro.
// Ou seja, o ultimo índice seria o algarismo da unidade, o penultimo seria dezena, e assim por diante

// Crie uma que retorne esse array de números, e some uma quantidade ('sum') neste array
// Ps: caso seja passado numeros invalidos, retorne null (mais de 1 algarismo por indice, negativos, decimais, etc)

function sumInArray(arr, sum) {
    // Transformar em um número inteiro
    let n = Number(arr.join(''))

    // Se o numero nao for inteiro, ou o tamanho de digitos for diferente do array, retorne null
    if(arr.length != n.toString().length || !Number.isInteger(n))
    return null;

    // Transformar de volta em um Array numerico
    return n = (n + sum).toString().split('').map( value => {
        return value
    });
}

console.log(sumInArray([2,3,9], 1))//, [2,4,0]
console.log(sumInArray([4,3,2,5], 3))//, [4,3,2,8]
console.log(sumInArray([4,3,2,5], 31))//, [4,3,5,6]
console.log(sumInArray([1,-9], 3))//, null
console.log(sumInArray([0,9], 3))//, null
console.log(sumInArray([10,9], 3))//, null
console.log(sumInArray([1,9.2], 3))//, null