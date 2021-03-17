const Gameboards = require('./Gameboard')

it('Ship Created', () => {
    const game1 = Gameboards()
    expect(game1.ships[2].shipPosition).toStrictEqual(["A1", "B1", "C1"])
})

it('Hit Missed', () => {
    const game1 = Gameboards()
    game1.receiveAttack(["A4", "B1", "C3"])
    expect(game1.missedShots).toStrictEqual(["A4", "C3"])
    expect(game1.ships[2].hits).toStrictEqual(["B1"])
    expect(game1.ships[2].isSunk()).toBe(false)
})

it('Sink the Second Ship', () => {
    const game1 = Gameboards()
    game1.receiveAttack(["F5", "G5"])
    expect(game1.missedShots).toStrictEqual([])
    expect(game1.ships[1].hits).toStrictEqual(["F5", "G5"])
    expect(game1.ships[1].isSunk()).toBe(true)
})