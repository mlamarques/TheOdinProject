const firstCharacterCapitalized = require('./string-to-title')

xit('first charc capital', () => {
    expect(firstCharacterCapitalized('hey there')).toBe('Hey there')
})

xit('first charc capital 2', () => {
    expect(firstCharacterCapitalized('You are fun')).toBe('You are fun')
})