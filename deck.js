const prompt = require('prompt');

prompt.start();

// create swap method for arrays. this will be utilized in our deck object's shuffle method.
Array.prototype.swap = function (one, two) {
    const temp = this[one];
    this[one] = this[two];
    this[two] = temp;
    return this;
}

// the deck
let deck = {
    cards: [],
    //  shuffles all cards in deck
    shuffle: function () {
        for (let i = 0; i < this.cards.length; i++) {
            const pos = Math.floor(Math.random() * this.cards.length);
            this.cards.swap(pos, i);
        }
        return this.cards;
    },
    // sort deck in ascending order
    sort: function () {
        let suits = [[],[],[],[]]
        // splits deck into separate suits
        for(i = 1; i < this.cards.length; i++) {
            for(j = 0; j < this.cards.length; j++) {
                if (this.cards[j].val == i) {
                    if(this.cards[j].suit == 'Spades') {
                        suits[3].push(this.cards[j]);
                    } else if(this.cards[j].suit == 'Hearts') {
                        suits[2].push(this.cards[j]);
                    } else if(this.cards[j].suit == 'Clubs') {
                        suits[1].push(this.cards[j]);
                    } else if(this.cards[j].suit == 'Diamonds') {
                        suits[0].push(this.cards[j]);
                    }
                }
            }
        }
        // callback function to flatten suits array
        const reducer = (deck, suit) => deck.concat(suit);
        this.cards = suits.reduce(reducer);
        return this.cards;
    },
    //  displays all cards in deck
    show: function () {
        deck.cards.forEach(function(card) {
            console.log(`${card.name} of ${card.suit}`)
        });
        console.log('');
    }
};

// error function for prompt module
function onErr(err) {
    console.log('dunno how, but we got an error mate:', err);
    return 1;
}

// init function to build the deck object
function buildDeck() {
    const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
    // build four suits
    for (let suitNum = 0; suitNum < 4; suitNum++) {

        // build cards per suit
        for (let i = 1; i <= 13; i++) {
            deck.cards.push({
                val: i,
                name: cardNameSelector(i),
                suit: suits[suitNum]
            });
        }
    }
}

// buildDeck() helper function to select card name
function cardNameSelector(i) {
    if (i == 1) {
        return '  Ace';
    } else if (i < 10) {
        return '    ' + i.toString();
    } else if (i == 10) {
        return '   ' + i.toString();
    } else if (i == 11) {
        return ' Jack';
    } else if (i == 12) {
        return 'Queen';
    } else if (i == 13) {
        return ' King';
    }
}

// program loop
function deckLoop(command) {
    // display
    if (command == 'd') {
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

// init command
let command = 'new deck';

// build the deck
buildDeck();
console.log('Welcome to a fresh deck of cards. What would you like to do with it?');
console.log('');
// run the program
makeChoice();