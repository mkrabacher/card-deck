describe('Deck of cards', function() {
    require('../DeckOfCards.js');
    
    describe("Array swap method", function () {
        
        it("should exist", function () {
            const arr = [1,2];
            
            expect(arr.swap(0,1)).toBeTruthy();
        });
        
        it("should swap two elements in an array.", function () {
            const arr = [1,2,3];
            
            expect(arr.swap(0,1)).toEqual([2,1,3]);
        });
        
        it("should return error when numbers outside range are given.", function () {
            const arr = [1,2,3];
            
            expect(function() {arr.swap(0,4)}).toThrow(new Error('error: one of the indices is out of range.'));
        });
    });
});