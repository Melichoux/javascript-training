// Partie 5.5 -----------------------------------------------------------------------------

console.log(`Partie 5.5`);

let stockCible = 100;
let jeuxEnStock = 0;
let compteur = 0;

while (jeuxEnStock < stockCible) {
  jeuxEnStock += 5; // on ajoute 5 jeux au stock à chaque livraison
  compteur++; // permet de compter le nombre de fois que la boucle tourne ce qui correspond au nombre de livraison
}
// console.log(`Il y a eu ${compteur} de livraisons pour completer le stock.`);
