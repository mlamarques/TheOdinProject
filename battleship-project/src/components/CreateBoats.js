import boardTiles from './BoardTiles'

const createBoats = () => {
    // 1 x 5
    // 1 x 4
    // 2 x 3
    // 2 x 2
    // 3 x 1

    const shipsLength = [5, 4, 3, 3, 2, 2, 1, 1, 1]

    const array = [0,1,2,3,4,5,6,7,8,9]

    const ShipsPositions = []

    let counterLoop = 0

    // for (let i = array.length - 1; i > 0; i--){ //Fisher-Yates Algorithm
    //     const j = Math.floor(Math.random() * i)
    //     const temp = array[i]
    //     array[i] = array[j]
    //     array[j] = temp
    //     }

    const randomize = (n) => {
        return Math.floor(Math.random() * n)
        }

    for (let i=0; i < shipsLength.length; i++) {
        addNewBoat(shipsLength[i])        
    }

    function addNewBoat(shipLength) {
        let Vector = tryShipPosition(shipLength).Vector
        let shipPosition = tryShipPosition(shipLength).shipPosition
        
        if (shipDoesNotHitAnotherOne(shipPosition) && shipFitsBoard(Vector)) {
            ShipsPositions.push(shipPosition)
        }
        if (counterLoop >= 100 - ShipsPositions.length) {
            console.log('Max numbers of tries reached')
        } else {
            addNewBoat()
            counterLoop ++
        }
    }

    function tryShipPosition(shipsLength) {
        let coordinateY = randomize(10)
        let coordinateX = randomize(10)

        let isHorizontal = randomize(2) // 1 is true 0 false

        let Vector = createVector(coordinateY, coordinateX, shipsLength, isHorizontal).tempVector

        let shipPosition = createVector(coordinateY, coordinateX, shipsLength, isHorizontal).tempPosition

        return {
            Vector,
            shipPosition
        }
    }

    function createVector(coordinateY, coordinateX, length, isHorizontal) {
        let tempVector = []
        let tempPosition = []

        if (isHorizontal === 1) {
            for (let i=0; i < length; i++) {
                tempVector.push(`${coordinateY}${coordinateX + i}`)
                tempPosition.push(boardTiles[coordinateY][coordinateX + i])
            }
        }

        if (isHorizontal === 0) {
            for (let i=0; i < length; i++) {
                tempVector.push(`${coordinateY + i}${coordinateX}`)
                tempPosition.push(boardTiles[coordinateY + i][coordinateX])
            }
        }

        return {tempVector, tempPosition}
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

    return (
        ShipsPositions
    )
}