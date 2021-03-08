function firstCharacterCapitalized(myString) {
    myNewString = myString.split('')
    myNewString.splice(0, 1, myString[0].toUpperCase())

    return myNewString.join('')
}

module.exports = firstCharacterCapitalized