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

//  Exemple structure de conditionnelle "if et else" avec imbrication de "else if"
let age = 18;

if(typeof age !== "number"){
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

//  Exemple de boucle "while"
// let i=0;
       
console.log( "Boucle while");

while (i<5)
{
    console.log(i);
    i++;
}

// Exemple de boucle "for"

console.log( "Boucle for");

for (let i=0; i<5; i++){  //Verifier si declarer la variable dans le for et ne pas la declarer à l'exterieur peut poser probleme
    console.log(i);
}