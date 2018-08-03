const Deck = require('./Deck');
let deck = new Deck;
const prompt = require('prompt');
prompt.start();

// create swap method for arrays. this will be utilized in our deck object's shuffle method.
Array.prototype.swap = function (one, two) {
    if (this[one] == undefined || this[two] == undefined) {
        throw new Error('error: one of the indices is out of range.');
    } else {
        const temp = this[one];
        this[one] = this[two];
        this[two] = temp;
        return this;
    }
}

// error function for prompt module
function onErr(err) {
    console.log('dunno how, but we got an error mate:', err);
    return 1;
}

// program loop
function deckLoop(command) {
    // display
    if (command == 'd') {
        console.log(deck);
        deck.show();
        makeChoice();
    // shuffle
    } else if (command == 's') {
        deck.shuffle();
        deck.show();
        makeChoice();
    // sort
    } else if (command == 'so') {
        deck.sort();
        deck.show();
        makeChoice();
    // quit
    } else if (command == 'q') {
    // error
    } else {
        console.log("I guess you had an issue with the instructions");
        console.log("Enter 'D', 'S', 'So' or 'Q' since that wasn't clear");
        
        prompt.get(['Command'], function (err, result) {
            if (err) { return onErr(err); }
            deckLoop(result.Command.toLowerCase())
        });
    }
}

// displays possible choices and ask for user command before running deckLoop() again.
function makeChoice() {
    console.log('Commands:');
    console.log('[D]isplay all cards in the deck');
    console.log('[S]huffle the cards in the deck');
    console.log('[So]rt the cards in the deck in ascending order');
    console.log('[Q]uit');
    console.log('');
    
    prompt.get(['Command'], function (err, result) {
        if (err) { return onErr(err); }
        // recursive call when this is called within deckLoop() acts as forward progress
        deckLoop(result.Command.toLowerCase())
    });
}

// welcome and run the program
console.log('Welcome to a fresh deck of cards. What would you like to do with it?');
console.log('');
makeChoice();