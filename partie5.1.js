//  Partie 5.1 -----------------------------------------------------------------------------
console.log(`Partie 5.1`);

const store=`Pixel Bay`;
console.log(store);
let nb_jeuxinit=500;
let PU=15;
console.log(`le stock initial etait de ${nb_jeuxinit} jeux.`) //facon équivalente: console.log("Le stock initial etait de "+nb_jeuxinit+" jeux.")
let stock = nb_jeuxinit-(nb_jeuxinit*30/100);
console.log(`Il reste ${stock} jeux en cette fin de journée!`);
let CA = (nb_jeuxinit*30/100)*PU;
console.log(`Et le chiffre d'affaire du jour est de ${CA} euro.`);
