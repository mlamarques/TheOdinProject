const createBoats = require('./CreateBoats')

it('running', () => {
    expect(['1']).toStrictEqual(['1'])
    expect(1).toBe(1)
})

it('running2', () => {
    const myTest = createBoats()
    expect(myTest).toBe(2)
})