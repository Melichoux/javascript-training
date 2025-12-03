// Partie 5.11 -----------------------------------------------------------------------------
console.log(`Partie 5.11`)

let jeu1 = {
  Titre:`Prince of Persia: Les sables du temps`,
  Année:`2003`,
  Genre:`Action-Aventure`,
  Score:`9`,
  moyenne(){
    return(this.Année*this.Score)/100
  },
  affichage() // <= c'est une method 
  {
    const affichage = console.log(this.Titre, this.Année,this.Genre,this.Score);

  },
};

let jeu2 = {
  Titre:`Prince of Persia: L'ame du guerrier`,
  Année:`2004`,
  Genre:`Action-Aventure`,
  Score:`8`,
  moyenne (){
    return(this.Année*this.Score)/100
  },
  affichage()
  {
    const affichage = console.log(this.Titre, this.Année,this.Genre,this.Score);
  },
};
console.log("_____________________")
jeu1.affichage()
console.log("_____________________")
jeu2.affichage()
// console.log(jeu1);
console.log(`---------------- Note des jeux------------`)
// let note1= (jeu1.Année * jeu1.Score)/100;
// let note2= (jeu2.Année*jeu2.Score) /100;

if (jeu1.moyenne>jeu2.moyenne) {
    console.log(`Le jeu le plus populaire entre ${jeu1.Titre} et ${jeu2.Titre} est:` , jeu1);
} else {
    console.log(`Le jeu le plus populaire entre ${jeu1.Titre} et ${jeu2.Titre} est:`, jeu2);

}

// Pk je ne peux pas afficher le detail de l'objet en mettant uniquement jeu1 ou jeu2 sur les lignes 24 et 26??
// Reponse: Impossible on ne peut pas afficher un objet!!! on sort toutes les infos 1 par 1.
