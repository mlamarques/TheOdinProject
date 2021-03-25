//const boardTiles = require('./BoardTiles')
const createBoats = require('./CreateBoats')
const Ship = require('./Ship')

const Gameboards = () => {
    // const boardTiles = [
    //     ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1'],
    //     ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2'],
    //     ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3'],
    //     ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4'],
    //     ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5'],
    //     ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'I6', 'J6'],
    //     ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'I7', 'J7'],
    //     ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8'],
    //     ['A9', 'B9', 'C9', 'D9', 'E9', 'F9', 'G9', 'H9', 'I9', 'J9'],
    //     ['A10', 'B10', 'C10', 'D10', 'E10', 'F10', 'G10', 'H10', 'I10', 'J10']
    // ]
    let missedShots = 0

    // const ship1 = Ship(['A9'])
    // const ship2 = Ship([boardTiles[4][5], boardTiles[4][6]])
    // const ship3 = Ship([boardTiles[0][0], boardTiles[0][1], boardTiles[0][2]])
    //const ships = [ship1, ship2, ship3]
    //const positions = [ship1.shipPosition, ship2.shipPosition, ship3.shipPosition]
    const positions = createBoats()
    let createShips = []

    for (let i=0; i  < positions.length; i++) {
        createShips.push(Ship(positions[i]))
    }

    const ships = createShips    

    return {
        ships: ships,
        receiveAttack: (coordinatesPair) => {
            // let hitMissed = 0
            for (let i=0; i < coordinatesPair.length; i++) {
                for (let j=0; j < ships.length; j++) {
                    if (ships[j].shipPosition.includes(coordinatesPair[i])) {
                        ships[j].hit(coordinatesPair[i])
                    } else {
                        missedShots ++
                    }
                }
                // if (hitMissed === ships.length) {
                //     missedShots.push(coordinatesPair[i])
                // }
                // hitMissed = 0
            }
        },
        missedShots: missedShots,
        positions: positions,
    }

}

module.exports = Gameboards