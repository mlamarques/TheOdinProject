function arrayAnalysis(myArray) {
    const average = (myArray.reduce((total, item) => total + item, 0)) / myArray.length
    const min = myArray.sort((a, b) => a > b ? 1 : -1)[0]
    const max = myArray.sort((a, b) => a > b ? -1 : 1)[0]
    const length = myArray.length

    object = {
        average: average,
        min: min,
        max: max,
        length: length
    }

    return object
}

module.exports = arrayAnalysis