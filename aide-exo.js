// Partie 5.12 -----------------------------------------------------------------------------

javascript
function addition(a, b) {
  return a + b;
}

console.log(addition(1, 2));

function soustraction(a, b) {
  return a - b;
}

console.log("===>", soustraction(1, addition(1, 2)));

const marques = [
  "Peugeot",
  22,
  {
    nom: "renault",
    nbPorte: 4,
  },
];

const peugeot = {
  matricule: "ZZ-123-YY",
  marque: "Peugeot",
  nbPorte: 4,
  couleur: "#FF0000",
};

console.log(peugeot);

function creerVoiture(
  matriculeVoiture,
  marqueVoiture,
  nbPorteVoiture,
  couleurVoiture
) {
  // Votre code ici
  return {
    matricule: matriculeVoiture,
    marque: marqueVoiture,
    nbPorte: nbPorteVoiture,
    couleur: couleurVoiture,
  };
}

let twingoBleu = creerVoiture("AB-432-DF", "Renault", 5, "#071929ff"); // permet de nommer l'objet

console.log(creerVoiture("AB-123-DF", "Renault", 5, "#00FF00"));
console.log(creerVoiture("AB-432-DF", "Renault", 5, "#071929ff"));
console.log(creerVoiture("AB-897-DF", "Renault", 5, "#030803ff"));

const voitureRetro = [
  creerVoiture("AB-123-DF", "Renault", 5, "#00FF00"),
  creerVoiture("AB-432-DF", "Peugeot", 5, "#071929ff"),
];

const voitureModerne = [
  creerVoiture("AB-780-DF", "Seat", 5, "#00FF00"),
  creerVoiture("AB-890-DF", "Ford", 5, "#071929ff"),
];

console.log("collection1", voitureRetro);
console.log("collection2", voitureModerne) 

let toto = 5

function afficherListeJeux(liste) {
  // Votre code ici

  // for (const element of liste) {
  //     console.log(`Plaque d'immatriculation : ${element.matricule}, Marque de voiture: ${element.marque} `)
  // }

 

  liste.forEach( (element) => {
    console.log(
      `Plaque d'immatriculation : ${element.matricule}, Marque de voiture: ${element.marque} `
    );
  })};

 
afficherListeJeux(voitureRetro);
afficherListeJeux(voitureModerne);


// Fonction classique

function multiplication (a, b) {
    return a * b;
};

 

// Fonction flechée ES6

const multiplier = (a, b) => {
    return a * b
};


//Objet littéral

const fordFocus = {
matricule:"zz-123-yy",
marque:"peugeot",
prixHT: 2000,

//Method = correspond aux fonctions dans des objets
demarrer() {
  return "la voiture demarre!";
},
prixTtc() {
  return this.prixHT*1.2
}
};

console.log(fordFocus.prixHT); // on peut cibler un element d'un objet en nommant l'objet.element
console.log(fordFocus.demarrer);
const prixVoitureTtc = fordFocus.prixTtc ();

const voitures = [
  "peugeot 208",
  "Renault Megane",
  "Ford Focus",
  "Renault Twingo",
];

// Fonction callback =  correspond a une fonction qui sera utiliser DANS une fonction qui en a besoin pour fonctionner
function callback(elmt) {
  return elmt == "Ford Focus";
};

// Exemple fonction qui utilise un callback

console.log(voitureModerne.findIndex(
  callback
))

// Autre exemple de fonction callback avec un tableau

const score = [42, 45, 76,87]

score.forEach(function(elmt) // la fonction est dite "anonyme" car elle n'est pas nommée
{
  console.log(elmt + "X"+" 2 = " + elmt*2) // attention pas de "return" car il mettrai fin a la boucle apres le premier resultat
})

for (let index = 0; index < score.length; index++) {
  console.log(score[index] + "X"+" 2 = " + score[index]*2)
}