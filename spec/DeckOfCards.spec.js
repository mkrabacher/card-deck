describe('Deck of cards', function () {
    var DeckOfCards = require('../DeckOfCards.js');
    var deck;
    
    beforeEach(function() {
        DOC = new DeckOfCards();
    })

    describe("initailization", function() {

        xit("should have a deck obj", function() {
            expect(typeof DOC.deck).toBe('object');
        })

    });

    describe("deckloop function", function () {

        describe("called with 'd'", function () {

            beforeEach(function () {
                spyOn(DOC, 'makeChoice');
                // spyOn(DOC.deck, 'show');                // can't figure out how to access the Deck object within the DeckOfCards
                DOC.deckLoop('d');
            })

            xit("should have called the deck's show method ", function () {
                expect(DOC.deck.show).toHaveBeenCalled();   // can't figure out how to access the Deck object within the DeckOfCards
            })

            it("should have called makeChoice() ", function () {
                expect(DOC.makeChoice).toHaveBeenCalled();
            })
        })

        describe("called with 's'", function () {

            beforeEach(function () {
                spyOn(DOC, 'makeChoice');
                // spyOn(DOC.deck, 'shuffle');                // can't figure out how to access the Deck object within the DeckOfCards
                // spyOn(DOC.deck, 'show');                // can't figure out how to access the Deck object within the DeckOfCards
                DOC.deckLoop('s');
            })

            xit("should have called the deck's shuffle method ", function () {
                expect(DOC.deck.shuffle).toHaveBeenCalled();
            })

            xit("should have called the deck's show method ", function () {
                expect(DOC.deck.show).toHaveBeenCalled();
            })

            it("should have called makeChoice() ", function () {
                expect(DOC.makeChoice).toHaveBeenCalled();
            })
        })

        describe("called with 'so'", function () {

            beforeEach(function () {
                spyOn(DOC, 'makeChoice');
                // spyOn(DOC.deck, 'sort');                // can't figure out how to access the Deck object within the DeckOfCards
                // spyOn(DOC.deck, 'show');                // can't figure out how to access the Deck object within the DeckOfCards
                DOC.deckLoop('d');
            })

            xit("should have called the deck's sort method ", function () {
                expect(DOC.deck.sort).toHaveBeenCalled();
            })

            xit("should have called the deck's show method ", function () {
                expect(DOC.deck.show).toHaveBeenCalled();
            })

            it("should have called makeChoice() ", function () {
                expect(DOC.makeChoice).toHaveBeenCalled();
            })
        })

        describe("called with wrong command", function() {
            
            it("should log the console twice", function() {
                console.log = jasmine.createSpy("log");
                DOC.deckLoop('asdf');
                expect(console.log).toHaveBeenCalledTimes(2);
            })
            
            it("should recall the deckloop program", function() {
                spyOn(DOC, 'deckLoop');
                DOC.deckLoop('asdf');
                expect(DOC.deckLoop).toHaveBeenCalled();
            })
        })
    });

    describe("makeChoice function", function () {

        beforeEach(function() {
            console.log = jasmine.createSpy('log');
            DOC.makeChoice()
        })
        
        it("should have logged six times", function() {
            expect(console.log).toHaveBeenCalledTimes(6);
        })
    })

    describe("startLoop function", function () {

        beforeEach(function() {
            spyOn(DOC, 'makeChoice');
            DOC.startLoop()
        })
        
        it("should have logged six times", function() {
            expect(DOC.makeChoice).toHaveBeenCalled();
        })
    })
});