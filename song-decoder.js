// Receba uma música remixada por um DJ com alguns "WUB's", e tranforme-a na musica original, substituindo os WUB's por 1 espaco (independente se houver multiplos WUB's seguidos), e certifique-se de remover os espacos iniciais e finais

function songDecoder(remixedSong) {
	// Procura por 1 ou mais WUB((WUB)+) em TODA(g) letra da música, e o substitua por UM espaco em branco, e remova os espacos no comeco e fim da musica
	return originalSong = remixedSong.replace(/(WUB)+/g, ' ').trim()
	// let originalSong = remixedSong.replace(/(wub)+/gi, ' ')
}
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
