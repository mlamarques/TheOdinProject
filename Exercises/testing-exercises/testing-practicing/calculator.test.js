const calculator = require('./calculator.js')

it('add', () => {
    expect(calculator.add(2, 4)).toBe(6)
})

it('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2)
})

it('divide', () => {
    expect(calculator.divide(4, 2)).toBe(2)
})

it('multiply', () => {
    expect(calculator.multiply(2, 4)).toBe(8)
})