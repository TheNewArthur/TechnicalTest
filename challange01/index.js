(() => {
    function myFunction(object, key) {
        return key in object ? object[key] : `key not found: '${key}'`
    }

    console.log(myFunction({ continent: 'Asia', country: 'Japan'}, 'continent'))
    console.log(myFunction({ continent: 'Europe', country: 'Sweden'}, 'country'))

})();