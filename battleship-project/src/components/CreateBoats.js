const boardTiles = require('./BoardTiles')

const createBoats = () => {
    // 1 x 5
    // 1 x 4
    // 2 x 3
    // 2 x 2
    // 3 x 1

    const shipsLength = [5, 4, 3, 3, 2, 2, 1, 1, 1]

    let ShipsPositions = []

    const randomize = (n) => {
        return Math.floor(Math.random() * n)
        }


    function addNewBoat(shipLength) {
        let shipPosition

        do {
            shipPosition = tryShipPosition(shipLength)
        } while (!shipDoesNotHitAnotherOne(shipPosition))
        
        ShipsPositions.push(shipPosition)
    }

    function tryShipPosition(shipsLength) {
        let coordinateY
        let coordinateX

        let isHorizontal = randomize(2) // 1 is true 0 false

        if (isHorizontal === 1) {
            coordinateY = randomize(10)
            coordinateX = randomize(10 - (shipsLength + 1))
        }

        if (isHorizontal === 0) {
            coordinateY = randomize(10 - (shipsLength + 1))
            coordinateX = randomize(10)
        }

        let shipPosition = createVector(coordinateY, coordinateX, shipsLength, isHorizontal)
        
        return shipPosition
    }

    function createVector(coordinateY, coordinateX, length, isHorizontal) {
        let tempPosition = []

        if (isHorizontal === 1) {
            for (let i=0; i < length; i++) {
                tempPosition.push(boardTiles[coordinateY][coordinateX + i])
            }
        }

        if (isHorizontal === 0) {
            for (let i=0; i < length; i++) {
                tempPosition.push(boardTiles[coordinateY + i][coordinateX])
            }
        }

        return tempPosition
    }

    function shipDoesNotHitAnotherOne(shipPosition) {
        for (let i=0; i < shipPosition.length; i++) {
            if (ShipsPositions.join().includes(shipPosition[i])) {
                return false
            }
        }
        return true
    }

    function shipFitsBoard(shipPosition) {
        for (let i=0; i < shipPosition.length; i++) {
            if (!ShipsPositions.join().includes(shipPosition[i])) {
                return false
            }
        }
        return true
    }

    for (let i=0; i < shipsLength.length; i++) {
        addNewBoat(shipsLength[i])        
    }

    
    return ShipsPositions
}

module.exports = createBoats