// Partie 5.11 -----------------------------------------------------------------------------
console.log(`Partie 5.11`)

let jeu1 = {
  Titre:`Prince of Persia: Les sables du temps`,
  Année:`2003`,
  Genre:`Action-Aventure`,
  Score:`9`
};

let jeu2 = {
  Titre:`Prince of Persia: L'ame du guerrier`,
  Année:`2004`,
  Genre:`Action-Aventure`,
  Score:`8`
};

console.log(jeu1,jeu2);

let note1= (jeu1.Année * jeu1.Score)/100;
let note2= (jeu2.Année*jeu2.Score) /100;

if (note1>note2) {
    console.log(`Le jeu le plus populaire entre ${jeu1.Titre} et ${jeu2.Titre} est: -------- ${jeu1} --------`);
    console.log(jeu1);
} else {
    console.log(`Le jeu le plus populaire entre ${jeu1.Titre} et ${jeu2.Titre} est: -------- ${jeu2} --------`);
    console.log(jeu2);

}

// Pk je ne peux pas afficher le detail de l'objet en mettant uniquement jeu1 ou jeu2 sur les lignes 24 et 26??