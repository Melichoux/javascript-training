// Partie 5.9 -----------------------------------------------------------------------------
console.log(`Partie 5.9`)

// Précision: le resultat du modulo etre egal à 0 pour que la condition soit true
/* Attention dans le language JS,
il faut préciser le resultat de chaque opération contrairement a algobox */

for (let index = 1; index <= 151; index++) {
   if (index%5 == 0 && index%3 == 0) {
    console.log(`FizzBuzz`)
   } else if (index%5 == 0){
    console.log(`Buzz`)
   } else if (index%3 == 0) {
    console.log(`Fizz`)
   } else {
    console.log(index)
   }
   }
