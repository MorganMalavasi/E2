const getArea = require('../area.js').getArea;

// stupid test for setting jest
test('test stupido', () => {
    expect(1).toBe(1);
});


describe('test for getArea', () => {

    // check on how many numbers are in the array 
    test('array compatible', () => {
        expect(getArea([1, 2])).toEqual(2);
    });
    /*
    test('> array', () => {
        expect(getArea([1,2,3])).toEqual(-1);
    });
    */
    test('array compatible', () => {
        expect(getArea([1, 2])).toEqual(2);
    });
    test('nothing', () => {
        expect(getArea()).toEqual(-1);
    });

    // check on number compatible
    test('float number', () => {
        expect(getArea([1, 2.2])).toEqual(-1);
    });

    test('string', () => {
        expect(getArea([1, "ciao"])).toEqual(-1);
    });

    test('undefined', () => {
        expect(getArea([1, undefined])).toEqual(0);
    });

    test('undefined', () => {
        expect(getArea([undefined, undefined])).toEqual(0);
    });

    test('undefined', () => {
        expect(getArea([undefined, 1])).toEqual(0);
    });

    test('minor', () => {
        expect(getArea([undefined, -1])).toEqual(-1);
    });

    test('minor', () => {
        expect(getArea([2, -1])).toEqual(-1);
    });

    // is not an array
    test('not array', () => {
        expect(getArea('a')).toEqual(-1);
    });

    test('not array', () => {
        expect(getArea('ass')).toEqual(-1);
    });

    test('not array, json', () => {
        expect(getArea({
            "se": 3
        })).toEqual(-1);
    });

});