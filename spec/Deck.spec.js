describe('Deck of cards', function() {
    let Deck = require('../deck.js');
    let deck;
    
    describe("Deck", function() {
        beforeEach(function() {
            deck = new Deck;
            console.log(typeof deck);
        })
        
        it('should be an object', function() {
            expect(typeof deck).toBe('object')
        })
    })
})