const Ship = (shipPos) => {
    const hits = []

    return {
        shipLength: shipPos.length,
        shipPosition: shipPos,
        hit: (hitPos) => {
            if (shipPos.includes(hitPos) && !hits.includes(hitPos)) {
                hits.push(hitPos)
            }
        },
        isSunk: () => hits.length === shipPos.length,
        hits: hits
    }
}

module.exports = Ship