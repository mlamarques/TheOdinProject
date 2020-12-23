const container = document.querySelector("#container")
const grid = document.createElement('div')

container.appendChild(grid)
grid.classList.add('pad')

//const divin = document.createElement('div')
//divin.classList.add('divin')
//grid.appendChild(divin)

let userInput = 4


const clearGrid = function() {
    grid.textContent = ''
}

const createGrid = function() {
    
    //define css grid
    document.querySelector(".pad").style.gridTemplateColumns = `repeat(${userInput}, ${400/userInput}px)`
    document.querySelector(".pad").style.gridTemplateRows = `repeat(${userInput}, ${400/userInput}px)`
    
    for (let i = 0; i < (userInput ** 2); i++) {
        let div = document.createElement('div')
        div.classList.add('cell')
        grid.appendChild(div)
    } 
}


const modal = document.getElementById("myModal")
const span = document.getElementsByClassName("close")[0]
const button = document.querySelector("#clear")
const submitButton = document.querySelector(".submit")

// When the user clicks the button, open the modal 
button.addEventListener('click', () => {
    //userInput = Number(window.prompt("Choose they how many squares for the grid (1-100): "))
    modal.style.display = "block"
    myInput.value = ''
    myInput.focus()
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//Limits the number of digits of the input
const myInput = document.querySelector('.user-input')
myInput.oninput = function () {
    if (Array.from(this.value)[Array.from(this.value).length -1] < 10) {
        if (this.value.slice(0, 3) == 100) {
            this.value = this.value.slice(0,3)
        } else if (this.value.length > 2) {
            this.value = this.value.slice(0,2)
        }
    } else {
        this.value = this.value.slice(0,-1)
    }
}

//Add user input
submitButton.addEventListener('click', () => {
    userInput = myInput.value
    console.log(userInput);
    clearGrid()
    createGrid()
    changeHover()
    modal.style.display = "none";
})

//Change color on hover
const changeHover = function() {
    const allCells = document.querySelectorAll('.cell')
    grid.addEventListener('click', () => {
        //e.target.setAttribute("style", "background-color:black; border:none;")
        allCells.forEach(cell => cell.addEventListener('mousemove', () => {
            cell.setAttribute("style", "background-color:black; border:none;")
        }))
    })
}


const newPage = function() {
    userInput = 16
    createGrid()
    changeHover()
}
newPage()
