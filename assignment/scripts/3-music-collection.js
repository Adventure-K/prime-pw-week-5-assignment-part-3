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
            title,
            artist,
            yearPublished,
        }
    collection.push(album);
    console.log(album, ' has been added to the collection.');
    return album;
    } // End function addToCollection

// collection population
addToCollection('Symphony and Metallica', 'Metallica', 1999);
// addToCollection('Monteverdi: Vespers of the Blessed Virgin', 'John Eliot Gardiner', 1986);
// addToCollection('Larmes de Résurrection', 'La Tempête', 2018);
addToCollection('Fashion Nugget', 'Cake', 1996);
// addToCollection('Bach Transcriptions', 'Leonard Slatkin', 2000);
addToCollection('Guerre et Paix', 'Jordi Savall', 2015);
addToCollection('Comfort Eagle', 'Cake', 2001);
addToCollection('Dani California', 'Red Hot Chili Peppers', 2006);
addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', 2006);
console.log('The collection:', collection);

// Function showCollection
function showCollection(array) {
    console.log('Showing collection of ' + array.length + ' albums:' );
    for (let x of array) {
        console.log(x.title + ' by ' + x.artist + ', released ' + x.yearPublished); //tried this with commas first, apostrophe chaos ensued
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
findArtist(collection, 'cake');
findArtist(collection, 'Jordi Savall');
findArtist(collection, 'Voces8');

// Stretch //

// A function which returns matches for an artist *and* year search

// Search input objects

let s1 = {
    artist: 'Cake',
    year: 2001
}
let s2 = {
    artist: 'Metallica',
    year: 1999
}
let s3 = {
    artist: '',
    year: 1986
}
let s4 = {}
let s5 = {
    artist: 'Red Hot Chili Peppers',
    year: 2006
}

// Function search
function search(array, searchObj) {
    let results = [];
    if (searchObj.artist === '' && searchObj.yearPublished === '' || searchObj.artist === undefined && searchObj.year === undefined) {
        return array;
    }
    for (let x of array) {
        if (searchObj.artist === x.artist && searchObj.year === x.yearPublished) {
            results.push(x);
        }
    }
    return results;
} // End function search

// Test function search
console.log('Searching for entries by artist ' + s1.artist + ' in year ' + s1.year);
console.log(search(collection, s1)); 
console.log('Searching for entries by artist ' + s2.artist + ' in year ' + s2.year);
console.log(search(collection, s2)); 
console.log('Searching for entries by artist ' + s3.artist + ' in year ' + s3.year);
console.log(search(collection, s3));
console.log('Searching for entries by artist ' + s4.artist + ' in year ' + s4.year);
console.log(search(collection, s4));
console.log('Searching for entries by artist ' + s5.artist + ' in year ' + s5.year);
console.log(search(collection, s5));

