// Partie 5.6 -----------------------------------------------------------------------------

console.log(`Partie 5.6`);

let jeux = [
  "Space Aventure",
  "Castle Quest",
  "Mystery Island",
  "Robot Wars",
  "Jungle Journey",
  "Racing Rush",
  "Pirate's Treasure",
  "Alien Invasion",
  "Super Sports",
  "Haunted Mansion",
  "Galactic Odyssey",
  "Winter Wonderland",
];

let mois = [
  "Janvier",
  "Févier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];


for (let compteur = 0; compteur < jeux.length && compteur< mois.length; compteur++) {
    console.log(`Le jeu vedette du mois de ${mois[compteur]} est ${jeux[compteur]}`);
}