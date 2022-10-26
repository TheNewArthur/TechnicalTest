
    function myFunction(object, key) {
        return Object.keys(object).length !== 0 && (key in object ? object[key] : `Key not found: '${key}'`)
    }

    module.exports = myFunction

