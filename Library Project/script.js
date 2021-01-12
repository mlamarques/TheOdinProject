/*
// TODO
// Make form fields obrigatory
// define better id creation
// create an edit function for the card?
//fix card size
*/

let myLibrary = []

// Constructor
function Book(title, author, isRead) {
   this.id = myLibrary.length
   this.title = title
   this.author = author
   this.isRead = isRead
}

function addBookToLibrary() {
    let newBook = new Book(bookFTitle.value, bookFAuthor.value, bookFStatus.value)
    myLibrary.push(newBook)
    saveToLocalStorage()
}

function removeBook(value) {
    return myLibrary = myLibrary.filter(obj => obj.id != value)
}

function clearForm() {
    bookFTitle.value = ''
    bookFAuthor.value = ''
    bookFStatus.value = null
}

function saveToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

function clearLocalStorage() {
    localStorage.clear()
}

function createBookCard(book) {

    let bookDiv = document.createElement('div')
    bookDiv.classList.add("project", "project-tile")
    bookDiv.setAttribute("id", `card-${book.id}`)

    let bookTitle = document.createElement('h3')
    let t = document.createTextNode(book.title)
    bookTitle.appendChild(t)

    let bookAuthor = document.createElement('h4')
    //bookAuthor.classList.add("project-tile")
    t = document.createTextNode(book.author)
    bookAuthor.appendChild(t)

    booksGrid.appendChild(bookDiv)
    bookDiv.appendChild(bookTitle)
    bookDiv.appendChild(bookAuthor)

    // let span = document.createElement('span')
    // span.classList.add("code")
    // span.textContent = "<"
    // bookP.appendChild(span)



    // span = document.createElement('span')
    // span.classList.add("code")
    // span.textContent = ">"
    // bookP.appendChild(span)

    let switchLabel = document.createElement('label')
    switchLabel.classList.add("switch")
    bookDiv.appendChild(switchLabel)
    let switchInput = document.createElement('input')
    switchInput.classList.add("toggle")
    switchInput.setAttribute("type", "checkbox")
        if (book.isRead == "true") {
            switchInput.checked = true
        } else {
            switchInput.checked = false
        }
    switchLabel.appendChild(switchInput)
    let switchSpan = document.createElement('span')
    switchSpan.classList.add("slider")
    switchLabel.appendChild(switchSpan)

    switchInput.addEventListener('click', (e) => {
        if (e.target.checked == true) {
            myLibrary[book.id].isRead = true
        } else {
            myLibrary[book.id].isRead = false
        }
    })


    //remove item
    let bookRemoveBtn = document.createElement('button')
    bookRemoveBtn.classList.add("remove-book", "btn", "material-icons")
    bookRemoveBtn.setAttribute("data-id", `${book.id}`)
    bookRemoveBtn.appendChild(document.createTextNode(`close`))
    bookDiv.appendChild(bookRemoveBtn)

    bookRemoveBtn.addEventListener('click', (e) => {
        let dataId = e.target.getAttribute("data-id")
        removeBook(dataId)
        saveToLocalStorage()
        document.querySelector(`div#card-${dataId}`).remove()

    })
}

//DOM elements
const booksGrid = document.querySelector('.books-grid')
const newBookBtn = document.querySelector('.add-new-book')

const newBookForm = document.querySelector('.new-book-section')
const newBookFormCloseBtn = document.querySelector('.close-form')
const bookFTitle = document.querySelector('#b-title')
const bookFAuthor = document.querySelector('#b-author')
const bookFStatus = document.querySelector('#b-read_status')
const bookAddBtn = document.querySelector('.add-book')
const fieldClearBtn = document.querySelector('.clear')


//EventListeners
newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = "flex"
})

newBookFormCloseBtn.addEventListener('click', () => {
    newBookForm.style.display = "none"
    clearForm()
})

bookAddBtn.addEventListener('click', () => {
    addBookToLibrary()
    populatePage()
    clearForm()
    newBookForm.style.display = "none"
})

fieldClearBtn.addEventListener('click', () => {
    clearForm()
})

//close form if clicked ouside form
// window.onclick = function(event) {
//     if (event.target == newBookForm) {
//         newBookForm.style.display = "none"
//     }
// }

//Populate list
function populatePage() {
    myLibrary  = JSON.parse(localStorage.getItem('myLibrary'))
    if (myLibrary == null) {
        myLibrary = []
    }
    booksGrid.textContent = ''
    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i])
    }
}

populatePage()
