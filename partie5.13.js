// Partie 5.13 -----------------------------------------------------------------------------
console.log(`Partie 5.13`)

let collection = [
    {
        titre:"Space Invaders",
        anneeSortie: 1984,
        scores:[85,87,90,78,88],
        moyenne () { // pas besoin de parametre parce que la method est interne a l'objet
            const somme = this.scores.reduce ((a,b) => {
                // console.log("a"+a)
                // console.log("b"+b)
                return a+b},0) // Pas besoin de faire b.scores car c'est un tableau simple
                return somme/this.scores.length    
        }
    },
    {
        titre:"God Of War",
        anneeSortie: 1994,
        scores:[95,87,98,58,88],
        moyenne () { // pas besoin de parametre parce que la method est interne a l'objet
            const somme = this.scores.reduce ((a,b) => {
                // console.log("a"+a)
                // console.log("b"+b)
                return a+b},0) // Pas besoin de faire b.scores car c'est un tableau simple
                return somme/this.scores.length    
        }

    },
    {
        titre:"Donkey Kong",
        anneeSortie: 1991,
        scores:[90,97,90,88,89],
        moyenne () { // pas besoin de parametre parce que la method est interne a l'objet
            const somme = this.scores.reduce ((a,b) => {
                // console.log("a"+a)
                // console.log("b"+b)
                return a+b},0) // Pas besoin de faire b.scores car c'est un tableau simple
                return somme/this.scores.length    // ATTENTION A L'ORTHOGRAPHE!!!!
        }

    },
    {
        titre:"Fall Out",
        anneeSortie: 1999,
        scores:[85,87,90,98,88],
        moyenne () { // pas besoin de parametre parce que la method est interne a l'objet
            const somme = this.scores.reduce ((a,b) => {
                // console.log("a"+a)
                // console.log("b"+b)
                return a+b},0) // Pas besoin de faire b.scores car c'est un tableau simple
                return somme/this.scores.length    
        }

    }
]


console.log(`----------------   Afficher les details d'un jeu   ------------------------`)

console.log (collection[0].scores) 
/* Il faut préciser l'index de l'élément à afficher car comme il s'agit d'un tableau,
 il faudraiT faire une boucle for pour tout afficher*/

console.log(`---------  Afficher les details de touts les jeux de la collection   ----------`)

function affichage (tableau){
for (const element of tableau) 
{
    console.log(`Titre: ${element.titre}, Annee de Sortie: ${element.anneeSortie}, Scores: ${element.scores}`);
}
}

affichage (collection)

console.log(`---------  Afficher la moyenne des scores d'un jeu   ----------`)

console.log("c"+collection[0].moyenne()) // cf comm ligne 62-63


 console.log(`---------  Afficher la moyenne des scores de la collection   ----------`)


 function sommetotal(tableau) { // ajouter un parametre pour la réutilisation de la fonction
    let total = tableau.reduce((a,b) => 
        // console.log(a)
        // console.log(b.moyenne())
            (a+b.moyenne()),0);
    console.log(total/tableau.length)
}
sommetotal(collection);

console.log("____sommemoyenne for_____")
function sommeMoyenne(tableau) { // ajouter un parametre pour la réutilisation de la fonction
    let total = 0
    for (let index = 0; index < tableau.length; index++) {
        let moyennejeu = tableau[index].moyenne(); 
        // console.log(moyennejeu);
        total = total+moyennejeu;
        // console.log(sommeMoyenne/collection.length)
    }
    return total/tableau.length
}
    console.log(sommeMoyenne(collection))

