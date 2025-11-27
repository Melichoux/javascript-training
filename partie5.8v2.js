// Partie 5.8 version 2 -----------------------------------------------------------------------------

import readlineSync from 'readline-sync';
console.log(`Partie 5.8`);

const promotion = readlineSync.question('Quel est le code promotion a appliquer? ete, hiver ou speciale ');

switch (promotion) {
        case "ete":
            function vingt() {
            const prixArt = Number(readlineSync.question("Quel est le prix de l'article?"));
            console.log(`Le prix en caisse de cet article est de ${prixArt - (prixArt*20/100)} euro!`);
        }
        vingt()
        break;

        case "hiver":
            function trente() {
            const prixArt = Number(readlineSync.question("Quel est le prix de l'article?"));
            console.log(`Le prix en caisse de cet article est de ${prixArt - (prixArt*30/100)} euro!`);
        }
        trente()
            break;
        case "speciale":
            function special() {
                const prixArt = Number(readlineSync.question("Quel est le prix de l'article?"));
                const promo = Number(readlineSync.question('Quel est le pourcentage de la promotion a appliquer?'))
            console.log(`Le prix en caisse de cet article est de ${prixArt - (prixArt*promo/100)} euro!`);
        }
        special()
            break;
    default:
        console.log(`Ceci n'est pas un code promo valide!`)
        break;
}

