describe('Deck of cards', function() {
    let Deck = require('../Deck.js');
    let deck;
    
    describe("Initialize Deck", function() {
        beforeAll(function() {
            deck = new Deck;
        })
        
        it('should be an object', function() {
            expect(typeof deck).toBe('object')
        })
        
        it('should have methods defined', function() {
            expect(deck.shuffle).toBeDefined();
            expect(deck.show).toBeDefined();
            expect(deck.sort).toBeDefined();
        })

        it("should have 52 objects in cards array", function() {
            expect(cards.length).toBe(52);                              // why can I read cards in my deck here?
        })

    })

    describe("show function", function() {

        beforeAll(function() {
            deck = new Deck;
            console.log =  jasmine.createSpy("log");
            deck.show();
        })

        it("should have called console log 52 + 1 times", function() {
            expect(console.log).toHaveBeenCalledTimes(53);
        })

        it("should have consoled card names appropriately", function() {
            for(let i = 0; i < cards.length; i++) {
                expect(console.log).toHaveBeenCalledWith(`${cards[i].name} of ${cards[i].suit}`); 
            };
        })
    })

    describe("shuffle function", function() {

        beforeEach(function() {
            deck = new Deck;
        })

        // there is a small chance that after the suffle these cards could end up in the same position, but the chance is slim
        it("should not leave cards where they were before shuffle", function() {
            expect(cards[0]).toEqual({ val: 1, name: '  Ace', suit: 'Diamonds' });
            expect(cards[25]).toEqual({ val: 13, name: ' King', suit: 'Clubs' });
            expect(cards[51]).toEqual({ val: 13, name: ' King', suit: 'Spades' });

            deck.shuffle();

            expect(cards[0]).not.toEqual({ val: 1, name: '  Ace', suit: 'Diamonds' })
            expect(cards[25]).not.toEqual({ val: 13, name: ' King', suit: 'Clubs' });
            expect(cards[51]).not.toEqual({ val: 13, name: ' King', suit: 'Spades' });
        })

        it("should have called the swap function 52 times.", function() {
            cards.swap = jasmine.createSpy("swap");
            
            deck.shuffle()
            
            expect(cards.swap).toHaveBeenCalledTimes(52);
        })

        it("should return a set of 52 cards", function() {

            expect(deck.shuffle().length).toEqual(52);
        })

    })

    describe("sort function", function() {

        beforeEach(function() {
            deck = new Deck;
        })

        // there is a small chance that after the suffle these cards could end up in the same position, but the chance is slim
        it("should not be sorted after shuffle and then should be sorted after sort", function() {
            deck.shuffle();
            
            expect(cards[0]).not.toEqual({ val: 1, name: '  Ace', suit: 'Diamonds' })
            expect(cards[25]).not.toEqual({ val: 13, name: ' King', suit: 'Clubs' });
            expect(cards[51]).not.toEqual({ val: 13, name: ' King', suit: 'Spades' });

            deck.sort();

            expect(cards[0]).toEqual({ val: 1, name: '  Ace', suit: 'Diamonds' });
            expect(cards[25]).toEqual({ val: 13, name: ' King', suit: 'Clubs' });
            expect(cards[51]).toEqual({ val: 13, name: ' King', suit: 'Spades' });
        })

        it("should return a set of 52 cards", function() {

            expect(deck.sort().length).toEqual(52);
        })

    })
})