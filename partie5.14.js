// Partie 5.14 -----------------------------------------------------------------------------
console.log(`Partie 5.14`)

let collection = [
    {
        titre: "Space Adventure",
        anneeSortie: 1984,
        genre: "Arcade",
        scores: [85, 87, 90, 78, 88]
    },
        {
        titre:"God Of War",
        anneeSortie: 2024,
        genre:"Action",
        scores:[95,87,98,58,88]
    },
    {
        titre:"Donkey Kong",
        anneeSortie: 1991,
        genre:"Aventure",
        scores:[90,97,90,88,89]
    },
    {
        titre:"Fall Out",
        anneeSortie: 2009,
        genre:"Aventure",
        scores:[85,87,90,98,88]
    }
];

    const newArray = collection.filter((elmt) => 
    /* dans ce cas element correspond a tout l'objet et pas seulement a l'une de ces proprietes*/
        {
        // console.log(elmt.anneeSortie)
        return elmt.anneeSortie >= 2000 && elmt.genre === "Aventure"
    });

    console.log(newArray)

// fAnnee(collection)
// function filtrerParGenre(collection, genre) {
// }

// Tests
