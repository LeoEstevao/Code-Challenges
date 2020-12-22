// Receba um array de nomes, e retorne os nomes que tenham 4 letras, sem alterar a ordem
function friend(friends){
  let newFriends = []
  newFriends = friends.filter( value => {
    return value.length == 4
  })
  return newFriends;
}

console.log(friend(['Mauricio', 'Jota', 'Francisca', 'José', 'Pedro', 'Ana']));