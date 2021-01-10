// Receba uma string, e verifique se a mesma é um isograma (palavra que nao repete letras)
	// PS: Um valor vazio será considerado um Isograma
// Transformar a string em um Array, ordenar alfabeticamente, e dar match no array usando expressao regular caso encontre um caracter repetido em sequencia
function isIsogram(str) {
	// Transforma uma string em caixa baixa(lowerCase) e depois em um array 1 caracter
	let arr = str.toLowerCase().split('');
	// Ordena o array em ordem alfanumérica
	arr = arr.sort();
	// Transforma o array em uma string
	arr = arr.join('');
	// Procura se há uma repeticao de qualquer caractere ou se a string passada é vazia, e retorna true
	if(arr.match(/(.)\1+/gi))
		return false
	return true
}

console.log(isIsogram('abaca')) //False
console.log(isIsogram('abBc')) //False
console.log(isIsogram('')) //True
console.log(isIsogram('ebajklz')) //True