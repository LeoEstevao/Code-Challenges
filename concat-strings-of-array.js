//   Receber um ARRAY de strings, e um numero de CONCATENACOES
//   Retire um numero(PARAMETRO 2) de strings de maior LENGTH, e concatene essas strings 
// 	 PS: A ordem das strings concatenadas, devem ser a mesma do array original, 
	// ou seja, apenas ordenar nao será o suficiente
//   PS2: Se o numero de CONCATENACOES for menor que 1 ou maior que o tamanho do array, retorne VAZIO ("")

function solution(strArray, nConcat) {
	// Caso o numero de elementos for menor do que o tamanho do Array, ou caso o numero de elementos seja 0 ou negativo
		// RETORNE VAZIO ''
	if(strArray.length < nConcat || nConcat <= 0)
		return '';

	// operador SPREAD do ES6 usado para copiar um Array (usando =, passara a referencia)
	const newArr = [...strArray];
	

	// Funcao de ordenacao, passando como parametro, o length da string, e na ordem decrescente (b - a)
	strArray.sort( function (a, b) {
		return b.length - a.length
	})
	
	// Percorrendo o array com um FOR, do ultimo elemento, ate sobrar a quantidade de elementos do 'nConcat'
		// PS: "-1" pois o indice comeca em 0, e o length/nConcat comecam em 1
	for (i = strArray.length - 1; i > nConcat - 1; i--){

		// Remover do Array clonado (Enquanto durar o loop)
		newArr.splice(
			// O Ultimo elemento NO Array ordenado DO Array original
			newArr.indexOf(strArray[i]),
			// Apenas 1 elemento removido
			1
		);
	}
	// Retorne o restante dos arrays como uma string concatenada
	return newArr.join('');
}


console.log(solution(['BBbBb', 'CC', 'A', 'DDDD'], 1));
console.log(solution(["zone", "abigail", "theta", "form", "libe", "zas"], 3));
console.log(solution(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)); 