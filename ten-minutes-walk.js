// Voce esta em um bairro que as ruas sao perfeitamente como uma grade
	// e deseja caminhar por exatos 10 minutos.
	// Cada quadra caminhada gasta 1 min
	// Voce esta em um ponto e deseja caminhar 10 minutos e acabar a caminhada no ponto inicial
	
// Crie uma funcao que cheque se uma rota atenderá todos requisitos acima!

function tenMinutesWalk(walk) {
	// Criacao das expressoes regulares
	let regS = /s/g;
	let regN = /n/g;
	let regE = /e/g;
	let regW = /w/g;
	// Se caminhar mais ou menos que 10 quadras, nao resulta nos 10 min de caminhada desejado
	if(walk.length != 10)
		return false;
	// Expressao regular em string (nao consegui usar em array)
	walk = walk.join('');
	// Como o match() retorna null caso n encontre o resultado, devemos alterar o null para um array vazio, assim podemos usar a logica com o tamanho (length) do array
	resN = walk.match(regN) == null ? [] : walk.match(regN);
	resS = walk.match(regS) == null ? [] : walk.match(regS);
	resE = walk.match(regE) == null ? [] : walk.match(regE);
	resW = walk.match(regW) == null ? [] : walk.match(regW);
	
	// Caso o n° de passos para Norte/Sul, e para Leste/Oeste forem iguais, voltamos ao ponto principal
	if(resN.length == resS.length && resE.length == resW.length)
		return true;
	return false;
}

console.log(tenMinutesWalk(['n', 'n', 'e', 's', 's', 'n', 'w', 's', 'n', 's']));// TRUE
console.log(tenMinutesWalk(['n','s','n','s','n','s','n','s','n','s']));// TRUE
console.log(tenMinutesWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));//FALSE
console.log(tenMinutesWalk(['w'])); //FALSE
console.log(tenMinutesWalk(['n','n','n','s','n','s','n','s','n','s'])); // FALSE