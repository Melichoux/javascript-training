// Partie 5.13 -----------------------------------------------------------------------------
console.log(`Partie 5.13`)

let collection = [
    {
        titre:"Space Invaders",
        anneeSortie: 1984,
        scores:[85,87,90,78,88],
        moyenne (tableau) {
            const somme = tableau.reduce ((a,b) => {
                return a+b.scores},0)
            return somme/tableau.scores.lenght    
        }
    
    },
    {
        titre:"God Of War",
        anneeSortie: 1994,
        scores:[95,87,98,58,88]
    },
    {
        titre:"Donkey Kong",
        anneeSortie: 1991,
        scores:[90,97,90,88,89]
    },
    {
        titre:"Fall Out",
        anneeSortie: 1999,
        scores:[85,87,90,98,88]
    }
]


console.log(`----------------   Afficher les details d'un jeu   ------------------------`)

console.log (collection[0].scores)

console.log(`---------  Afficher les details de touts les jeux de la collection   ----------`)

function affichage (tableau){
for (const element of tableau) 
{
    console.log(`Titre: ${element.titre}, Annee de Sortie: ${element.anneeSortie}, Scores: ${element.scores}`);
}
}

affichage (collection)

console.log(`---------  Afficher la moyenne des scores d'un jeu   ----------`)

console.log(collection.moyenne)

// function moyennejeu (jeu){
// // console.log(tableau);
// const somme = jeu.scores.reduce ((a, b) => {
//     return a+b},0); 
// return ( somme/jeu.scores.length); 
// /*console.log ne convient pas car on rappelle la function dans un console.log*/
// }

// console.log(`La moyenne des scores de ${collection[0].titre} est: ${moyennejeu(collection[0])}`)
/* console.log([ 85, 87, 90, 78, 88 ].reduce((a,b)=>a+b)); 
=> cette ligne est équivalente a la ligne 57
 console.log(collection[0].scores.reduce((a,b)=>a+b));
 => mise en évidence de la séléction du tableau "scores" d'un objet dans le tableau "collection*/


//  console.log(`---------  Afficher la moyenne des scores de la collection   ----------`)

//  function moyenneCollection (tableau,){
//     for (let index = 0; index <= tableau.length; index++) 

//         {
//             const sommeCollection = sommeJeu
//             function moyennejeu (jeu)
//             {
//             const sommeJeu = jeu.scores.reduce ((a, b) => {
//             return a+b},0); 
//             return ( sommeJeu/jeu.scores.length); 
//             }
//         }
// }
// moyenneCollection(collection)
// // console.log(`La moyenne des scores de ${collection[0].titre} est: ${moyenneCollection(collection)}`)
