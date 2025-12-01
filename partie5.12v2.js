// Partie 5.12 -----------------------------------------------------------------------------
import readlineSync from "readline-sync";

console.log(`Partie 5.12`);

function newGames(titre, anneeSortie, genre) {
  const game = {
    titre: readlineSync.question("Quel est le titre de l'article?"),
    anneeSortie: Number(
      readlineSync.question("Quel est l'annee de sortie de l'article?")
    ),
    genre: readlineSync.question("Quel est le genre de l'article?"),
  };
  console.log(game);
  /*manque un code d'integration d'objet dans un tableau,
  ajout d'une commande de choix du tableau de stockage!*/
}

const jeuxRetro = [];
const jeuxModernes = [];

newGames();

//-------------------------------------------------------
function listeJeu(liste) {
  console.log(jeuxRetro);
  moyenneAnneeSortie();
  console.log(jeuModernes);
  moyenneAnneeSortie();
}

//-------------------------------------------------------
function moyenne(liste){}
/*
Q1: comment nommer le jeu en remplacant le "game de la ligne 7 de l'objet??
R: pas besoin car l'index différenciera les objets
Q2: comment choisir le tableau dans lequel on affecte la valeur*/
