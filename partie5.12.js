// Partie 5.12 -----------------------------------------------------------------------------
console.log(`Partie 5.12`)

console.log(`----------------   Fonction NewGame   ------------------------`)


function newGame (titre, anneeSortie,genre)// les parametres sont les noms des values
{
     return {   
        titre : titre,
        anneeSortie : anneeSortie ,
        genre: genre,
    }
};

console.log(`Nouveau jeux retro`)

const jeuxRetro = [
    newGame ("POP",1990,"Action"),
    newGame ("DK",1999,"Aventure"),
    newGame ("MortalKombat",1993,"Combat"),
]
// console.log(jeuxRetro)

console.log(`Nouveau jeux modernes`)
const jeuxModernes = [
    newGame ("HLegacy",2019,"Aventure"),
    newGame ("DCUO",2015,"Action"),
    newGame ("Cyberpunk",2023,"Action"),
]
// console.log(jeuxModernes)

console.log(`----------------   Fonction listeJeux   ------------------------`)

function liste (tableau) {
    tableau.forEach((element) => /* tableau permet au moment de l'appel de choisir le tableau qui sera "lu"
et "element" ne sert qu'a avertir qu'un element sera utilisé? */
    {console.log(`Voici la liste des jeux rétro: ${element.titre}`)
})};

// liste(jeuxRetro)
// liste(jeuxModernes)

console.log(`----------------   Fonction moyenneAnnee   ----------------------`)

function moyenneAnnee (tableau){
// console.log(tableau);
const somme = tableau.reduce ((a, b) => {
    return a+b.anneeSortie},0); // Attention: si je ne mets pas de valuer initial a mon reduce, dans ce code c'a ne marche pas! ='(
// console.log(somme);
return ( somme/tableau.length); //console.log ne convient pas car on rappel la function dans un console
}

// console.log(`La moyenne des années des jeux Retro est: `+ moyenneAnnee(jeuxRetro));
// console.log(`La moyenne des années des jeux Modernes est: `+ moyenneAnnee(jeuxModernes));

console.log(`----------------   Réponse Finale   ----------------------`)

liste(jeuxRetro)
console.log(jeuxRetro)
console.log(`La moyenne des années des jeux Retro est: `+ moyenneAnnee(jeuxRetro));
liste(jeuxModernes)
console.log(jeuxModernes)
console.log(`La moyenne des années des jeux Modernes est: `+ moyenneAnnee(jeuxModernes));
