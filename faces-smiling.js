//  Receba um array de emotes de 'carinhas', e Retorne Quantos estao SORRINDO
    // Todo rosto deve ter olhos ( ':' ou ';' ) e sorrisos ( ')' ou 'D' )
    // Nariz é opcional, porém os únicos narizes válidos sao ( '-' e '~' )
    
function countSmileys(arr) {
    let smileyFaces = arr.filter(face => {
      return (
          // Olhos válidos
          (face.indexOf(':') != -1 || face.indexOf(';') != -1)
          &&
          // Sorrisos válidos
        (face.indexOf('D') != -1 || face.indexOf(')') != -1)
        &&
        (
            // Narizes validos
            ((face.length === 3) && ((face.indexOf('-') != -1) || (face.indexOf('~') != -1)))
        ||
            // Sem Nariz
            (face.length == 2)
        )
      );
    });
    return smileyFaces;
}

console.log(countSmileys([':)',':(',':D',':O',':;'])) //, 2

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D', ';>D'])) //, 1);