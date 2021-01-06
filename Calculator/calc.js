class Calculator {
    constructor(inputScreen, recordScreen) {
        this.inputScreen = inputScreen
        this.recordScreen = recordScreen
        this.currentValue = ''
        this.recordedValue = ''
        this.operation = undefined

    }

    clear() {
        this.currentValue = ''
        this.recordedValue = ''
        this.operation = undefined
    }
    
    delete() {
        this.currentValue = this.currentValue.toString().slice(0,-1)
    }

    symbol(symbol) {
        if (this.currentValue == "") {
            return
        }
        if (this.operation != undefined) {
            this.operation = this.operation
        } else {
            this.operation = symbol
        }
        this.recordedValue = this.currentValue
        this.currentValue = ""
    }

    number(number) {
        if (this.currentValue.includes(".") && number == ".") {
            return
        }
        this.currentValue = this.currentValue.toString() + number.toString()
    }

    negative() {
        this.currentValue *= -1
    }

    operate() {
        let computation
        const prev = parseFloat(this.recordedValue)
        const current = parseFloat(this.currentValue)
        switch (this.operation) {
            case "+":
                computation = prev + current
                break
            case "-":
                computation = prev - current
                break
            case "/":
                computation = prev / current
                break
            case "*":
                computation = prev * current
                break
            default:
                return
        }
        this.currentValue = computation
        this.operation = undefined
        this.recordedValue = ""
    }

    displayNumbers() {
        if (this.operation != undefined) {
            this.recordScreen.innerText = this.recordedValue + this.operation
        } else {
            this.recordScreen.innerText = ""
        }
        this.inputScreen.innerText = this.currentValue   
    }
}

let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let clearAllButton = document.querySelector('[data-clear-everything]')
let deleteButton = document.querySelector('[data-delete]')
let equalsButton = document.querySelector('[data-equals]')
let negativeButton = document.querySelector('[data-negative]')

let currentNumber = document.querySelector('[data-current-number]')
let previousOperation = document.querySelector('[data-previous-operation]')


let calculator = new Calculator(currentNumber, previousOperation)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.number(button.innerText)
        calculator.displayNumbers()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.symbol(button.getAttribute("value"))
        calculator.displayNumbers()
    })
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.displayNumbers()
})

equalsButton.addEventListener('click', () => {
    if (calculator.operation == undefined) {
        return
    }
    calculator.operate()
    calculator.displayNumbers()
})

clearAllButton.addEventListener('click', () => {
    calculator.clear()
    calculator.displayNumbers()
})

negativeButton.addEventListener('click', () => {
    calculator.negative()
    calculator.displayNumbers()
})