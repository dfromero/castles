const countPossibleCastles = require('./index');

describe('countPossibleCastles function', () => {

    test('can handle empty land', () => {
        expect(countPossibleCastles([])).toBe(0);
    })

    test('can build at start or end of land', () => {
        expect( countPossibleCastles([2]) ).toBe(1);
        expect( countPossibleCastles([10,30]) ).toBe(2);

        // if it can build at start and end, does this break the condition as it is not a peak nor a valley ?
        // assuming it can only build one on this edge case
        expect( countPossibleCastles([999,999]) ).toBe(1);
    });

    test('can build on peaks', () => {
        expect( countPossibleCastles([2,6,6,6,3]) ).toBe(3);
        expect( countPossibleCastles( [1,300,299]) ).toBe(3);
        expect( countPossibleCastles( [99,100,99]) ).toBe(3);
    });

    test('can build on valleys', () => {
        expect( countPossibleCastles( [5,1,1,1,8]) ).toBe(3);
        expect( countPossibleCastles( [3,2,10]) ).toBe(3);
        expect( countPossibleCastles( [344,10,500]) ).toBe(3);
    });

    test('can build on peaks and valleys', () => {
        expect( countPossibleCastles( [1,3,3,3,3,2,7,7,7,7,2,4,1]) ).toBe(7);
        expect( countPossibleCastles( [33,66,11,45,45,45,20,100]) ).toBe(6);
        expect( countPossibleCastles( [999,998,999,998,999]) ).toBe(5);
    });
})
