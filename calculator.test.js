const cal = require('./calculator');

describe('Add operations', () => {

    test('adds 1 + 1 to equals 2', () => {
        var value = cal.add(1, 1);
        expect(value).toBe(2);
    });
    test('adds 2 + 5 to equals 7', () => {
        var value = cal.add(2, 5);
        expect(value).toBe(7);
    });
});

describe('Subtrack operations', () => {

    test('Subbtrack 1 - 1 to equals 0', () => {
        var value = cal.subtrack(1, 1);
        expect(value).toBe(0);
    });
    test('Subbtrack 5 - 2 to equals 3', () => {
        var value = cal.subtrack(5, 3);
        expect(value).toBe(2);
    });
});