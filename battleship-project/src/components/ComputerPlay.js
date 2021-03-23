const boardTiles = require('./BoardTiles')

const ComputerPlay = () => {
    const hits = []
    const posOptions = boardTiles.join().split(',')

    return {
        pickTile: () => {
            let num = Math.floor(Math.random() * posOptions.length)

            hits.push(posOptions[num])
            posOptions.splice(posOptions.indexOf(posOptions[num]), 1)

            return hits[-1]
        },
        hits: hits
    }
}

module.exports = ComputerPlay