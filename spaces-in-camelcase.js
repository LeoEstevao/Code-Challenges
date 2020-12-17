// Receba uma string, e dê espaços em brancos sempre que houver camelCase


function solution(string){
    // Dividir a string recebida em um array de caracteres.
    let arr = string.split('');
    
    // Var que vai receber o valor retornado
    let newStr = ''

    // Função que vai mapear o Array, e quando tiver letra maiúscula, vai retornar um espaço adicional
    arr.map( (char) => {
        if(char === char.toUpperCase())
            return newStr += ' ' + char

        newStr += char
    })
    console.log(newStr)
}

solution('camelCasingTest');