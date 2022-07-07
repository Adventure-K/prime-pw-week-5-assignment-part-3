console.log('***** Music Collection *****')

// Hold on, need to see what an array of objects looks like

/*
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
*/

let collection = [];

// Function addToCollection
function addToCollection(title, artist, yearPublished) {
        let album = {
            title: title,
            artist: artist,
            yearPublished: yearPublished
        }
    collection.push(album);
    console.log(album, ' has been added to the collection.');
    return album;
    } // End function addToCollection

// collection population
addToCollection('Symphony and Metallica', 'Metallica', 1999);
addToCollection('Monteverdi: Vespers of the Blessed Virgin', 'John Eliot Gardiner', 1986);
addToCollection('Larmes de Résurrection', 'La Tempête', 2018);
addToCollection('Fashion Nugget', 'Cake', 1996);
addToCollection('Bach Transcriptions', 'Leonard Slatkin', 2000);
addToCollection('Guerre et Paix', 'Jordi Savall', 2015);
addToCollection('Californication', 'Red Hot Chili Peppers', 1999);
addToCollection('Blood Sugar Sex Magik', 'Red Hot Chili Peppers', 1991);
addToCollection('Comfort Eagle', 'Cake', 2001);
console.log('The collection:', collection);

// Function showCollection
function showCollection(array) {
    console.log('Showing collection of ' + array.length + ' albums:' );
    for (let x of array) {
        console.log(x.title + ' by ' + x.artist + ', released ' + x.yearPublished);
    }
} // End function showCollection

// Test showCollection
showCollection(collection);

// Function findArtist
function findArtist(array, artist) {
    let results = [];
    for (let x of array) {

        if (artist === x.artist) {
            results.push(x);
        }
    }
    console.log('Results for search ' + artist);
    if (results.length === 0) {
        console.log('No results.')
    } else {
    console.log(results);
    }
    return results;
} // End function findArtist

// Test findArtist
findArtist(collection, 'Cake');
findArtist(collection, 'Red Hot Chili Peppers');
findArtist(collection, 'Red hot Chili Peppers'); 
findArtist(collection, 'Jordi Savall');
findArtist(collection, 'Voces8');

