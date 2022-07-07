console.log('***** Music Collection *****')

// Hold on, need to see what an array of objects looks like

let deck = [];

let card1 = {
    suit: 'Spades',
    no: 1
}
let card2 = {
    suit: 'Spades',
    no: 2
}
let card3 = {
    suit: 'Spades',
    no: 3
}
deck.push(card1);
deck.push(card2);
deck.push(card3);

console.log(deck);





let collection = [];


// Reference Object
let albumR = {
    title: 'Queen Mary\'s Big Belly',
    artist: 'Gallicantus',
    yearPublished: 2017
}

function addToCollection(title, artist, yearPublished) {
        let album = {
            title,
            artist,
            yearPublished
        }
    collection.push(album);
    return album;
    }

addToCollection('abc', 'def', 2000);
addToCollection('ghi', 'jkl', 2005);
console.log(collection);