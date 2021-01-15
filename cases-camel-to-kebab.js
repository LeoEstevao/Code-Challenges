// Receba uma String em camelCase, e a converta para Kebab-case (Substituir os camelCases por ' - ' )
function toKebabCase(str) {
    // Transforma maiúsculos em minúsculos e separa por ' - '
    str = str.replace(/[A-Z]/g, res => {
        return ( '-' + res.toLowerCase());
    })

    // Remove os números
    str = str.replace(/[0-9]/g, '');

    // Remove barra inicial
    return str.replace(/(-*)/, '');
}
console.log(toKebabCase('Te1stCamelCase')); //'test-camel-case'
console.log(toKebabCase('myCamelCasedString')); //'my-camel-cased-string'
console.log(toKebabCase('myCamelHas3Humps')); //'my-camel-has-humps'