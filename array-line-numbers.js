// Receba um array de strings, e liste a linha de cada string
function teste(arr) {
	newArr = arr.map((value, index) => {
		return`${index + 1}: ${value}`;
	})
	return newArr;
}

console.log(teste(['a', 'b', 'c']));
console.log(teste(['Titulo do texto', 'Era uma vez...', 'Um editor de código diferente.']));