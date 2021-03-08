function reverseString(mystring) {
    let reversedMystring = []

    for (let i = mystring.length - 1; i >= 0; i--) {
        reversedMystring.push(mystring[i])
    }

    return reversedMystring.join('')
}

module.exports = reverseString