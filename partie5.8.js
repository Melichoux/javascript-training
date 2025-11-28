// Partie 5.8 -----------------------------------------------------------------------------

import readlineSync from 'readline-sync';
console.log(`Partie 5.8`);

/* let prixJeux = 50;  Cette variable n'est necessaire
 QUE si je ne definis pas la variable dans la fonction càd les lignes 
 "const prixJeux = number" */ 

function ete() {
    const prixJeux = Number(readlineSync.question("Quel est le prix de l'article?"));
    console.log(`Le prix en caisse de cet article est de ${prixJeux - (prixJeux*20/100)} euro!`);
}
ete()

function hiver() {
    const prixJeux = Number(readlineSync.question("Quel est le prix de l'article?"));
    console.log(`Le prix en caisse de cet article est de ${prixJeux - (prixJeux*30/100)} euro!`);
}
hiver()

function speciale() {
    const prixJeux = Number(readlineSync.question("Quel est le prix de l'article?"));
    const pourcentage = Number(readlineSync.question("Quel est le pourcentage de la promotion?"));
    console.log(`Le prix en caisse de cet article est de ${prixJeux - (prixJeux*pourcentage/100)} euro!`);
}



