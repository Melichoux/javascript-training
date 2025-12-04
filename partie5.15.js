// Partie 5.15 -----------------------------------------------------------------------------
import readlineSync from "readline-sync";

console.log(`Partie 5.15`);

function aBissextiles() {
          const anneeUser = readlineSync.question("Quel est l'annee a analyser?")
          if ((anneeUser%4 === 0 && anneeUser%100 !== 0) || anneeUser%400 === 0 ) {
            console.log( `${anneeUser} est une annee bissextile!`);           
          }
          else{
            console.log(`${anneeUser} n'est PAS une annee bissextile!`)
          }   
}

aBissextiles()