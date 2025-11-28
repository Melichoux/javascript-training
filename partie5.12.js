// Partie 5.12 -----------------------------------------------------------------------------
import readlineSync from 'readline-sync';

console.log(`Partie 5.12`)

function newGame (titre, anneeSortie,genre){
    const  game = {
        titre : readlineSync.question("Quel est le titre de l'article?"),
        anneeSortie = Number(readlineSync.question("Quel est l'année de sortie de l'article?")),
        genre:readlineSync.question("Quel est le genre de l'article?"),
    };
    console.log(game)
}
newGame(game)
function listeJeu (liste){
    
};
function newGame (titre, anneeSortie,genre){
    
};