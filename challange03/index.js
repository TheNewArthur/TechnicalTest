(() => {
    const button = document.getElementById('button');
    const list = document.getElementById('list')
    
    button.addEventListener('click' , () => {
        const valueToAdd = document.getElementById('input').value
        
        var listItem = document.createElement('li')
        var text = document.createTextNode(valueToAdd)

        listItem.appendChild(text)
        list.appendChild(listItem)
    })

})();