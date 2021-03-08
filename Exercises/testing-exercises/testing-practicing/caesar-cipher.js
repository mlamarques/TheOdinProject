
const caesar = function(phrase, shift) {
    
    //transform string in code: .charCodeAt(i)
    let newPhrase = phrase
        .split("")
        .map(item => item.charCodeAt())

    for (let i = 0; i < newPhrase.length; i++) {
        if (64 < newPhrase[i] && 91 > newPhrase[i]) { //put in the lowecase range
            if (shift >= 0) {
                newPhrase[i] += shift
                for (; newPhrase[i] > 90;) { //keep starting from the min range if value higher than max range 
                    newPhrase[i] -= 26 //newPhrase[i] - 90 + 64
                }
            } else {
                newPhrase[i] += shift
                for (; newPhrase[i] < 65;) { //keep starting from the max range if value lower than min range 
                    newPhrase[i] += 26 //newPhrase[i] + 90 - 64
                }
            }      
        } else if (96 < newPhrase[i] && 123 > newPhrase[i]) { //put in the uppercase range
            if (shift >= 0) {
                newPhrase[i] += shift
                for (; newPhrase[i] > 122;) { //keep starting from the min range if value higher than max range 
                    newPhrase[i] -= 26 //newPhrase[i] - 90 + 64
                }
            } else {
                newPhrase[i] += shift
                for (; newPhrase[i] < 97;) { //keep starting from the max range if value lower than min range 
                    newPhrase[i] += 26 //newPhrase[i] + 90 - 64
                }
            } 
        } 
    }
    return newPhrase
        .map(item => String.fromCharCode(item))
        .join("")         
}

module.exports = caesar