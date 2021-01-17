// Há uma corrida de tartarugas acontecendo entre duas tartarugas (Tartaruga A e Tartaruga B)
// A uma das tartarugas, confiante que venceria a corrida parou para se alimentar (Tartaruga B).
// Ao voltar pra corrida, a tartaruga B quer saber quanto tempo ela vai demorar para alcançar a Tartaruga A

// Crie uma função que receberá a velocidade da tartaruga A (spd1), da Tartaruga B (spd2) e a distância entre elas (gap)
// E retorne um array contendo [horas, minutos, segundos] para a tartaruga A ser alcançada

// Ps: A medida de velocidade é 'pés por hora'
function race(spd1, spd2, gap) {
	// Para saber quanto a sp2 vai alcançar a sp1, basta subtrair a velocidade da sp2 pela sp1, e calcular quanto tempo vai atingir o gap
	// POIS, dessa maneira, estaremos 'neutralizando' o andamento da sp1, diminuindo a velocidade da mesma pela da sp2
	// Sendo a velocidade que sobrar, será o "Lucro" da sp2

	// Diferença da velocidade entre as tartarugas
	let spdDiff = spd2 - spd1;

	// Se a tartaruga que está à frente estiver mais rápida ou na mesma velocidade, nunca será alcançada
	if(spd1 >= spd2)
		return null;

	// Fazer regra de três para calcular os segundos necessários para a tartaruga 2 alcançar a tartaruga 1
		// Arredondar os resultados para baixo
			// E usar resto da divisão para calcular os segundos, minutos e horas, separadamente!
		return [
			// Calcular o tempo total em horas.
			Math.floor(gap * 3600 / spdDiff / 3600),
			
			// Calcular o tempo total em minutos
			// 60 minutos = 1 hora. Portanto o resto da divisão de (nMinutos % 60) serão os minutos atuais
			Math.floor((gap * 3600 / spdDiff / 60) % 60),

			// 60 segundos = 1 minuto. Portanto o resto da divisão de (nSegundos % 60) serão os segundos atuais
			Math.floor((gap * 3600 / spdDiff) % 60),
		];
}

console.log(race(3, 5, 70)) 		//[35, 0, 0]
console.log(race(720, 850, 70)) 	//[0, 32, 18]
console.log(race(80, 91, 37)) 		//[3, 21, 49]
console.log(race(80, 100, 40)) 		//[2, 0, 0]