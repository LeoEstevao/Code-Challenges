// Receba uma lista de convidados no seguinte formato:
    // "Nome2:Sobrenome2;Nome3:Sobrenome3;Nome1:Sobrenome1; ... ";
// Formate tal lista, para o seguinte formato
    // (SOBRENOME1, NOME1)(SOBRENOME2, NOME2)(SOBRENOME3, NOME3)
// Requisitos:
    // A lista deverar ser ordenada alfabeticamente pelo sobrenome, e caso tenham sobrenomes iguais, a ordenacao deverá ser feita pelo primeiro nome.
    // TUDO deverá estar em letras maiúsculas
    // O formato deverá ser exatamente igual acima (em string, com espacos iguais e etc)
function meeting(s) {
    // Separar a lista em um array
    let arr = s.split(';');

    // Separar cada item do array, em outros arrays, onde o segundo parametro será o sobrenome
    let orderedArr = arr.map(value => {
        // Transformar em uppercase agora, pois caso receba nomes em letras maiúsculas, a logica do sort será afetada negativamente
        return value.toUpperCase().split(':');
    })
    // Caso seja retornado um valor: 
        // MENOR que 0 = (a, b, ...)
        // MAIOR que 0 = (b, a, ...)
    // a = 2° Índice
    // b = 1° Índice
    orderedArr.sort((a, b) => {
        // console.log(`A: ${a}. B: ${b}`);

        // Caso o A seja MENOR(alfabeticamente falando) do que B:
        if(a[1] < b[1])
            // Retorne -1, para Ordenar o A antes do B
            return -1;
        // Caso o A seja MAIOR(alfabeticamente falando) do que B:
        if(a[1] > b[1])
            // Retorne 1, para ordenar o B antes do A
            return 1;
        // Caso o A seja IGUAL(alfabeticamente falando) do que B
        if(a[1] == b[1]){
            // Retorne 0, para manter a posicao original deles
            // return 0

            // OU, vamos ordenar atraves do primeiro nome (índice [0])
            if(a < b)
                return -1
            if(a > b)
                return 1
            if(a == b)
                return 0
        }
        console.log('Nao pode cair aqui');
    })

    // Retornar String formatada, com o Sobrenome em primeiro
        // Outra alternativa, seria usar o REVERSE + JOIN
    orderedArr = orderedArr.reduce((stack, value) => {
        return stack += `(${value[1]}, ${value[0]})`
    }, '');

    return(orderedArr);
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));