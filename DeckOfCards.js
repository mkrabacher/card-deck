const Deck = require('./Deck');
require('./ArrayMethods')
const prompt = require('prompt');
prompt.start();

function DeckOfCards() {
    deck = new Deck;
}

// error function for prompt module
function onErr(err) {
    console.log('dunno how, but we got an error mate:', err);
    return 1;
}

// program loop
DeckOfCards.prototype.deckLoop = function (command) {
    // display
    if (command == 'd') {
        deck.show();
        this.makeChoice();
    // shuffle
    } else if (command == 's') {
        deck.shuffle();
        deck.show();
        this.makeChoice();
    // sort
    } else if (command == 'so') {
        deck.sort();
        deck.show();
        this.makeChoice();
    // quit
    } else if (command == 'q') {
    // error
    } else {
        console.log("I guess you had an issue with the instructions");
        console.log("Enter 'D', 'S', 'So' or 'Q' since that wasn't clear");
        
        prompt.get(['Command'], function (err, result) {
            if (err) { return onErr(err); }
            myDeck.deckLoop(result.Command.toLowerCase())
        });
    }
}

// displays possible choices and ask for user command before running deckLoop() again.
DeckOfCards.prototype.makeChoice = function () {
    console.log('Commands:');
    console.log('[D]isplay all cards in the deck');
    console.log('[S]huffle the cards in the deck');
    console.log('[So]rt the cards in the deck in ascending order');
    console.log('[Q]uit');
    console.log('');
    
    prompt.get(['Command'], function (err, result) {
        if (err) { return onErr(err); }
        // recursive call when this is called within deckLoop() acts as forward progress
        myDeck.deckLoop(result.Command.toLowerCase())
    });
}

// function to start game
DeckOfCards.prototype.startLoop = function () {
    // welcome and run the program
    console.log('Welcome to a fresh deck of cards. What would you like to do with it?');
    console.log('');
    this.makeChoice();
}

myDeck = new DeckOfCards;

myDeck.startLoop();

module.exports = DeckOfCards;