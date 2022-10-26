const myFunction = require('./index.js')

describe('myFunction when passed two arguments( Object {continent:..., country:...}, string {key}) returns the value in the object that belongs to the string {key}.', () => {

    test('When "country" is passed as a key, the function will return the value "Sweden".', () => {
        expect(myFunction({continent: 'Asia', country: 'Sweden'}, 'country')).toBe('Sweden')
    })

    test('When "continent" is passed as a key, the function will return the value "Asia".', () => {
        expect(myFunction({continent: 'Asia', country: 'Sweden'}, 'continent')).toBe('Asia')
    })

    test('When a key that does not exist in the object is passed as a key, the function will return the value "Key not found: contnent".', () => {
        expect(myFunction({continent: 'Asia', country: 'Sweden'}, 'helloWorld')).toBe("Key not found: 'helloWorld'")
    })

    test('When an empty object is passed as a first argument, it will return false', () => {
        expect(myFunction({}, 'helloWorld')).toBeFalsy()
    })
})

