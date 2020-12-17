// Receba um array de pessoas que deram likes em um conteúdo.
// Liste se houve curtidas, os nomes das pessoas que curtiram, e caso tenham mais de 3 pessoas, abrevie a mensagem...


function likes(names){
    // Var de msg padrão
    let message = ' like this';
    // Var com a mensagem das pessoas que deram likes
    let likeds = 'no one';

    if(names.length <= 1)
        message = message.replace('like', 'likes');

        names.map( (name, index) => {
            // 1° like
            if (index == 0)
                return likeds = name;

            // 2° like, porém com 2 likes totais
            if(index == 1 && names.length == 2)
                return likeds += ' and ' + name;

            // 2° likes, porém com 3 likes totais ou mais
            if(index == 1 && names.length >= 3)
                return likeds += ', ' + name;

            // 3° like, com 3 likes totais
            if(index == 2 && names.length == 3)
                return likeds += ' and ' + name;

            // 4° like ou mais
            if(index == names.length - 1)
                return likeds = `${likeds} and ${index - 1} others`;
        })
        return (likeds + message);
    }
console.log(likes([]));
console.log(likes(['Jacob']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Alex', 'Jacob', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Alex', 'Jacob', 'Mark', 'Max']));
