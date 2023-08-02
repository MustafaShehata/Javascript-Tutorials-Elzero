// Searching Topics to solve Any Object exercises:

/**
 * JavaScript Object
 * JavaScript Has Own Property
 * JavaScript Object Sorting
 * JavaScript Object Length
 * JavaScript Object Keys
 * JavaScript Object Values
 */


// The Object To Work With
let myFavGames = {
    // Doesn't contain game's version
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};

// Returns an Array containing the values of all "enumerable string-keyed" properties of an giving object
// console.log(Object.values(myFavGames));

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length; // 3

for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
    console.log(`The Publisher Is ${Object.values(myFavGames)[i]["publisher"]}`);
    console.log(`The Price Is ${Object.values(myFavGames)[i]["price"]}`);

    // Check If Nested Object Has Property (bestThree)
    // if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")
    if (myFavGames[Object.keys(myFavGames)[i]]["bestThree"]) {
        console.log("- Game Has Releases");
        console.log(`First => ${Object.values(myFavGames)[i]["bestThree"]["one"]}`);
        console.log(`Second => ${Object.values(myFavGames)[i]["bestThree"]["two"]}`);
        console.log(`Third => ${Object.values(myFavGames)[i]["bestThree"]["three"]}`);
    }
    console.log("#".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"