const myFunction = require('./index')

describe('When two objects are passed down, they shoud be merged and the double key "b" should be changed to "d".', () => {

    test('When "{a: 1, b: 2}" and "{c: 3, b: 4, e: 5}" are passed down as objects, the function will return "{a: 1, b: 2, c: 3, d: 4, e: 5}".', () => {
        expect(myFunction({a: 1, b: 2},{c: 3, b: 4, e: 5})).toStrictEqual({a: 1, b: 2, c: 3, d: 4, e: 5})
    })

    test('When "{a: 1, b: 2}" and "{a: 3, d: 4, e: 5}" are passed down as objects, the function will return "{a: 1, b: 2, c: 3, d: 4, e: 5}".', () => {
        expect(myFunction({a: 1, b: 2},{a: 3, d: 4, e: 5})).toStrictEqual({a: 1, b: 2, c: 3, d: 4, e: 5})
    })
})