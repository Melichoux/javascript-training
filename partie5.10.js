// Partie 5.10 -----------------------------------------------------------------------------
console.log(`Partie 5.10`)

let inventaire=[`Jeux`, `Manette`, `Console`, `Pop`, `Goodies`];
console.log(`Il y a ${inventaire.length} éléments lors du 1er inventaire:`);
inventaire.forEach((element)=> console.log(element));

//------------------------------------------------------------------------------------------
inventaire.push(`Cables`, `Support`); //ATTENTION Pas de "=" apres le "push"
console.log(`Il y a ${inventaire.length} éléments lors du 2ieme inventaire:`);
inventaire.forEach((element) => console.log(element))


//------------------------------------------------------------------------------------------
inventaire.shift() // QUESTION = A quoi sert les parentheses
console.log(`Il y a ${inventaire.length} éléments lors du 3ieme inventaire:`);
inventaire.forEach((element) => console.log(element))

// Comment afficher l'element supprimé