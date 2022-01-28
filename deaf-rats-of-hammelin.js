// Um encantador de ratos está tocando uma flauta para atraí-los em sua direção, porém alguns ratos são surdos.
// Verifique quantos ratos são surdos, baseado na direção que eles estão indo em relação ao encantador de ratos.

// Legenda:
// P = Encantador de ratos
// ~O = Rato se movendo para direita
// O~ = Rato se movendo para esquerda
//  O~ P ~O (significa que os ratos estão indo na direção contrária do encantador, portanto são surdos).

function countDeafRats(movingRats) {
    // Cortar string em um array, separando ~O, O~ ou P
    const regex = /([O~]{2}|[P])/g;

    // Criando Array
    const arr = movingRats.match(regex);
    
    // Índice do encantador
    const piedPiper = arr.indexOf("P");

    // Filtrar apenas os ratos que não estão na direção do encantador
    const deafRats = arr.filter( (ratDirection, index) => {
        return (ratDirection == "O~" && index < piedPiper 
        ||
        ratDirection == "~O" && index > piedPiper)
    })

    // Quantidade de ratos surdos
    return deafRats.length;
}

console.log(countDeafRats("~O~O~O~O P")); // 0
console.log(countDeafRats("P O~ O~ ~O O~")); // 1
console.log(countDeafRats("~O~O~O~OP~O~OO~")); // 2
