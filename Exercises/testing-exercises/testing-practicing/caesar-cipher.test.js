const caesar = require('./caesar-cipher')

it('One letter', () => {
    expect(caesar('A', 1)).toBe('B')
})

it('z to a', () => {
    expect(caesar('z', 1)).toBe('a')
})

it('z to a', () => {
    expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
})