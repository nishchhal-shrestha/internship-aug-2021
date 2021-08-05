const readProperties = (inputObject) => {
    for(let property in inputObject) {
        console.log(property, inputObject[property]);
    }
}

readProperties({
    firstName: 'Nishchhal',
    lastName: 'Shrestha'
})
