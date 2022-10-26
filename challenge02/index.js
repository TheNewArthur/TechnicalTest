(() => {
    function myFunction(x, y) {

        const alphabeticalKeys = ['a', 'b', 'c', 'd', 'e']
        const keysObject1 = Object.keys(x)
        const allKeys =  Object.keys({...x, ...y})
        var changeKey = ''
        var changeToKey = ''

        keysObject1.forEach(element => {
            element in y && (changeKey = element)      
        })

        alphabeticalKeys.forEach(element => {
            allKeys.includes(element) == false && (changeToKey = element)
        })

        y[changeToKey] = y[changeKey]
        delete y[changeKey]

        const obj = {...x, ...y}
        const sorted = Object.keys(obj).sort().reduce((tempObj, key) => {
                tempObj[key] = obj[key]
                return tempObj 
            }, {})

        return sorted
    }

    //console.log(myFunction({a: 5, b: 4}, {c: 3, d: 1, e: 2}))

    module.exports = myFunction

})();