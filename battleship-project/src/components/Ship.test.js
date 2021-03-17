const ship = require('./Ship')

it('Ship creation', () => {
    const ship1 = ship(['A1', 'B1', 'C1'])
    expect(ship1.shipPosition).toStrictEqual(["A1", "B1", "C1"])
    expect(ship1.shipLength).toBe(3)
})

it('Is Ship Sunk?', () => {
    const ship1 = ship(['A1', 'B1', 'C1'])
    expect(ship1.isSunk()).toBe(false)
})

it('Ship One Hit', () => {
    const ship1 = ship(['A1', 'B1', 'C1'])
    ship1.hit('A1')
    expect(ship1.hits).toStrictEqual(['A1'])
})

it('Ship Several Hits', () => {
    const ship1 = ship(['A1', 'B1', 'C1'])
    ship1.hit('A1')
    ship1.hit('B1')
    ship1.hit('C1')
    expect(ship1.hits).toStrictEqual(['A1', 'B1', 'C1'])
})

it('Ship Some Hits and Miss', () => {
    const ship1 = ship(['A1', 'B1', 'C1'])
    ship1.hit('A1')
    ship1.hit('B1')
    ship1.hit('E1')
    expect(ship1.hits).toStrictEqual(['A1', 'B1'])
})

it('The Ship has Sunk', () => {
    const ship1 = ship(['A1', 'B1', 'C1'])
    ship1.hit('A1')
    ship1.hit('B1')
    ship1.hit('C1')
    expect(ship1.isSunk()).toBe(true)
})