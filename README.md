# TechnicalTest Fabulor

### Task: 3 Challenges

### Time: 8 hours (13:30 - 21:30)

In this repository you can find all my solutions for the challenges.
Every challenge has its own directory in which you will find an index.html and an index.js file.
In the first and second challenge directory you also can find a challengeX.test.js file to test the functions.

If you clone this repository, you can test the functions by the command: yarn test or yarn test:watch.


If you are not very interested in running the tests and just want to check the code I wrote real quick,
they will be listed down here in code and in png.



## Challenge 1:

### Challenge:

![challenge 1](./pictures/challange01.png)

### Solution: 

#### Code:

```
    function myFunction(object, key) {
        return Object.keys(object).length !== 0 && (key in object ? object[key] : `Key not found: '${key}'`)
    }

    module.exports = myFunction
```

#### Png:

![solution 1](./pictures/solutionJS01.png)



## Challenge 2:

### Challenge:

![challenge 2](./pictures/challange02.png)

### Solution: 

#### Code:

```
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

    module.exports = myFunction
```

#### Png:

![solution 2](./pictures/solutionJS02.png)



## Challenge 3:

### Challenge:

![challenge 3](./pictures/challange03.png)

### Solution: 

#### Code:

```
const button = document.getElementById('button');
    const list = document.getElementById('list')
    
    button.addEventListener('click' , () => {
        const valueToAdd = document.getElementById('input').value
        
        var listItem = document.createElement('li')
        var text = document.createTextNode(valueToAdd)

        listItem.appendChild(text)
        list.appendChild(listItem)
    })
```

#### Png:

![solution 3](./pictures/solutionJS03.png)