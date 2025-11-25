//je suis un commentaire mono ligne

/* je suis un 
commentaire
multi-
lignes */

// console.log("Salut tout le monde!! Je suis \" \" .");

// Si on veut afficher une variable:
//  on declare une variable
// let nom= "toto";

// pour l'afficher on doit faire un console.log dans la console:

// console.log(nom);

let age = 18;
if(typeof age != "number"){
    console.log("Entrez un age");
}
else if (age<0){
    console.log("C'est impossible!");
}
else if (age > 18) {
  console.log("Tu as le droit de conduire");
} else if (age === 18) {
  console.log("Bon Anniversaire");
} else {
  console.log("Rentre à pied!");
}
