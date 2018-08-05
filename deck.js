// the deck
function Deck() {
    cards = [];
    const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
    // build four suits
    for (let suitNum = 0; suitNum < 4; suitNum++) {

        // build cards per suit
        for (let i = 1; i <= 13; i++) {
            cards.push({
                val: i,
                name: cardNameSelector(i),
                suit: suits[suitNum]
            });
        }
    }
};

//  displays all cards in deck
Deck.prototype.show = function () {
    cards.forEach(function(card) {
        console.log(`${card.name} of ${card.suit}`)
    });
    console.log('');
};

Deck.prototype.shuffle = function () {
    for (let i = 0; i < cards.length; i++) {
        const pos = Math.floor(Math.random() * cards.length);
        cards.swap(pos, i);
    }
    return cards;
};

// sort deck in ascending order
Deck.prototype.sort = function () {
    let suits = [[],[],[],[]]
    // splits deck into separate suits
    for(i = 1; i < cards.length; i++) {
        for(j = 0; j < cards.length; j++) {
            if (cards[j].val == i) {
                if(cards[j].suit == 'Spades') {
                    suits[3].push(cards[j]);
                } else if(cards[j].suit == 'Hearts') {
                    suits[2].push(cards[j]);
                } else if(cards[j].suit == 'Clubs') {
                    suits[1].push(cards[j]);
                } else if(cards[j].suit == 'Diamonds') {
                    suits[0].push(cards[j]);
                }
            }
        }
    }
    // callback function to flatten suits array
    const reducer = (deck, suit) => deck.concat(suit);
    cards = suits.reduce(reducer);
    return cards;
};

// helper function to select card name
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

module.exports = Deck;