// Crie uma funcao que recebera 2 parametros ( repeticao (n), valor (v) )
    // Retorne um array de de valores 'v' repetido 'n' vezes
        // PS: NAO usar loop nesta funcao.
        // Se 'n' for 0, retorne um array vazio
        // Se 'n' nao for um valor  inteiro >= 1 ou um inteiro formatado em string >= '1'
            // Jogue um TypeError, dizendo que n é invalido
function fillAnArray(n, v){
    if(n == 0)
        return []

        // Toda string nao numérica qnd é convertida para numero com o método Number, se torna NaN, e NaN tem o typeof === 'number'
            // Entao basta transformar tudo em 'number', e chegar se esse 'number' nao é integer ou negativo
    if(
        typeof(n) == 'boolean'
        ||
        Number.isInteger(Number(n)) == false 
        ||
        Number(n) < 0    
    )throw new TypeError(n + ' is not valid');
    
    // Criar um array vazio
    let arr = [];
    // Criar um array no índice de n - 1, assim sera criado indices vazioa ate o indice do array passado
    arr[n - 1] = 0;

    // preencher todos os indices do array com um valor
    return arr.fill(v);
}

console.log(fillAnArray(3))// [undefined, undefined, undefined]
console.log(fillAnArray(0, 3))// []
console.log(fillAnArray(3, 1))// [1,1,1]
console.log(fillAnArray(2,'abc'))// ['abc','abc']
console.log(fillAnArray('1', 1))// [1]
console.log(fillAnArray(3, fillAnArray(2,'2d')))// [['2d','2d'],['2d','2d'],['2d','2d']]
console.log(fillAnArray('xyz', 1))// throw new TypeError('xyz is invalid')

