// Partie 5.7 -----------------------------------------------------------------------------

import readlineSync from 'readline-sync';
console.log(`Partie 5.7`);

// let codeSecret = ["Alpha", "Bravo", "Charlie", "Delta"] => FAUX car le parametre sert uniquement a enregistrer les données de l'user

const codeSecret = readlineSync.question('Quel est le code secret? ');

console.log("avant" + codeSecret)

switch (codeSecret) {
    case "Alpha":
        console.log(`Lancer la promotion de la semaine!`)
        break;
    case "Bravo":
                console.log(`Réorganiser la secton des jeux rétro!`)
        break;
    case "Charlie":
                console.log(`Preparer la zone de démonstration pour les nouveaux arrivages!`)
        break;
    case "Delta":
                console.log(`Vérifier l'inventaire des accessoirese!`)
        break;
    default:
                console.log(`Vous ne connaissez pas le code secret! ^-.-^`)
        break;
}