
import {ScreenRender} from './domElements.js'
import {createNewTask, saveToLocalStorage, taskRemove, updatedList} from './create-object.js'
import {createMyTasksArray, myTasks, myList} from  './index'

const dynamicListeners = (() => {
    //input new task
function createAddBtnListener(taskList) {
    const inputAddBtn = document.querySelector(".add-btn")
    const inputText = document.querySelector(".input-box-top input")
    const inputDueDate = document.querySelector(".input-box-bottom input")

    inputAddBtn.addEventListener('click', () => {
        createNewTask(taskList, inputText.value, inputDueDate.value, document.querySelectorAll(".input-box-bottom .tags-list a"))
        saveToLocalStorage(taskList)
        ScreenRender.cleanInputFields()
        ScreenRender.createTaskElement(taskList[taskList.length -1])
        createTaskOptionListener()
    })
    
}

function createCancelBtnListener() {
    const inputCancelBtn = document.querySelector(".cancel-btn")

    inputCancelBtn.addEventListener('click', () => {
        ScreenRender.removeInputBox()
    })
}

function createInputPriorityIconListener() {
    const iconPriorityInput = document.querySelector('.input-box-bottom i.fa-flag')
    
    iconPriorityInput.addEventListener('click', (e) => {
        if (!document.querySelector('.temp-menu')) {
            console.log(`left:${e.pageX}, right:${e.pageY}`)
            ScreenRender.createMenuPriority(e)
            createPriorityOptionListener()
            document.querySelector('.temp-menu').focus()
            removeElementBluredListener(document.querySelector('.temp-menu'), ScreenRender.removeTempMenu, document.querySelector('.temp-menu'))
        }  
    }) 
}

function createPriorityOptionListener() {
    const priorityOptionsBtns = document.querySelectorAll('.temp-menu a')
    const priorityIcon = document.querySelector('.input-box-bottom i.fa-flag')

    priorityOptionsBtns.forEach(item => item.addEventListener('click', function() {
        priorityIcon.setAttribute('value', Array.prototype.indexOf.call(priorityOptionsBtns,item))
        ScreenRender.removeTempMenu(document.querySelector('.temp-menu'))
    }))
}

function createInputTagsIconListener(allTags) {
    const iconMenuTags = document.querySelector('.input-box-bottom i.fa-tags')

        iconMenuTags.addEventListener('click', (e) => {
            if(!allTags.length) {
                //create NEW TAG
            }
            if (!document.querySelector(".temp-tags-menu")) {
                ScreenRender.createMenuTags(e, allTags)
                createTagsOptionListener(document.querySelector(".input-box-bottom div.tags-list"))
                document.querySelector(".temp-tags-menu").focus()
                //setTimeout(() => {  removeElementBluredListener(document.querySelector(".temp-tags-menu"), ScreenRender.removeMenuTags); }, 10);
                removeElementBluredListener(document.querySelector(".temp-tags-menu"), ScreenRender.removeTempMenu, document.querySelector(".temp-tags-menu"))
            }
        })
}

function createTagsOptionListener(inputTagsDiv) {
    const menuTags = document.querySelectorAll(".temp-tags-menu a")
    menuTags.forEach(item => item.addEventListener('click', function() {
            if(!inputTagsDiv.innerHTML.includes(item.innerHTML)) {
                ScreenRender.addTagToTaskBox(item)
            }
            ScreenRender.removeTempMenu(document.querySelector(".temp-tags-menu"))
        })
    )
}

function createMenuItemsListener() {
    const allMenuElements = document.querySelectorAll(".vertical-menu a")
    const mainTitle = document.querySelector(".main-title h1")
    
    //make selected title bold and updated main title if menu item = filter
    allMenuElements.forEach(item => item.addEventListener('click', function() {
        for (let i = 0; i < allMenuElements.length; i++) {
            allMenuElements[i].style.fontWeight = "400"
        }
    //make the arrow, name and plus all bold
        if (this.parentElement.classList.contains("list-filter")) {
            let childrenList = item.parentElement.children
            for (let i=0; i < childrenList.length; i++) {
                childrenList[i].style.fontWeight = "600"
                }
            } else if (myList.includes(this.innerText)) {
                this.style.fontWeight = "600"
                mainTitle.innerHTML = this.innerHTML
                ScreenRender.cleanMainDiv()
                ScreenRender.showAddTask() 
            } else {
            this.style.fontWeight = "600"
            mainTitle.innerHTML = this.innerHTML
            }
    }))
}

function createNewListItemInputListener() {
    const tempInputfield = document.querySelector('.input-temp-box input')

    tempInputfield.focus()
    tempInputfield.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.querySelectorAll('.input-temp-box button')[0].click();
        }
    })
}

function createNewListItemAddBtnListener(myList) {
    const newListAddBtn = document.querySelectorAll('.input-temp-box button')[0]

    newListAddBtn.addEventListener('click', () => {
        const textInputItem = document.querySelector('.input-temp-box input').value

        if (textInputItem != '') {
            myList.push(textInputItem)
        }

        ScreenRender.removeTempMenu(document.querySelector('.input-temp-box'))
        ScreenRender.createMyListItems(myList)
        createMenuItemsListener()
    })
}

function createNewListItemCancelBtnListener() {
    const newListCancelBtn = document.querySelectorAll('.input-temp-box button')[1]

    newListCancelBtn.addEventListener('click', () => {
        ScreenRender.removeTempMenu(document.querySelector('.input-temp-box'))
    })
}

function createTaskOptionListener() {
    const allTasksOption = document.querySelectorAll('.task-options')
    
    allTasksOption.forEach(item => item.addEventListener('click', function(e) {
        if (!document.querySelector('.temp-task-menu')) {
            ScreenRender.createTaskOptionMenu(e)
            createTaskOptionItemsListener()
            document.querySelector('.temp-task-menu').focus()
            removeElementBluredListener(document.querySelector('.temp-task-menu'), ScreenRender.removeTempMenu, document.querySelector('.temp-task-menu'))
        }
    }))
}

function createTaskOptionItemsListener() {
    const allTasksOptionItems = document.querySelectorAll('.temp-task-menu a')
    const allTasksOptionEdit = allTasksOptionItems[0]
    //const allTasksOptionCopy = allTasksOptionItems[1]
    const allTasksOptionDelete = allTasksOptionItems[2]

    //allTasksOptionEdit.onclick(funcv)
    //allTasksOptionCopy.onclick(funcv)
    allTasksOptionDelete.onclick = (e) => {
        const value = e.target.offsetParent.getAttribute('value')
        const allMenuElements = document.querySelectorAll(".vertical-menu a")
        const newTaksList = taskRemove(myTasks, value)

        saveToLocalStorage(newTaksList)
        createMyTasksArray()
        ScreenRender.removeTempMenu(document.querySelector('.temp-task-menu'))
        ScreenRender.pageRender(document.querySelector(".main-title h1").innerText)
    }

    allTasksOptionEdit.onclick = (e) => {
        const selectedValue = e.target.offsetParent.getAttribute('value')
        document.querySelector('.task-fields-card').setAttribute('value', selectedValue)
        const selectedObj = myTasks.find(x => x.idTask == selectedValue)
    
        let editTaskCardDueDate = document.querySelector(".task-fields-card .task-bottom-right input")
        let editTaskCardPriority = document.querySelector(".task-fields-card .fa-flag")

        document.querySelector('.task-fields-card .task-title h4').innerText = selectedObj.title
        console.log(selectedObj.title)
        editTaskCardDueDate.setAttribute('value', selectedObj.dueDate)
        document.querySelector('.task-fields-card h2').innerText = selectedObj.listName
        editTaskCardPriority.setAttribute('value', selectedObj.priority)

        document.querySelector(".edit-task-section").style.display = 'flex'
    }
}

function removeElementBluredListener(element, action, param) {
    document.onclick = () => {
        if (element && element != document.activeElement) {
            action(param)
        } 
    } 
}

//MODAL
function createPriorityOptionListenerModal() {
    const priorityOptionsBtns = document.querySelectorAll('.temp-menu a')
    const priorityIcon = document.querySelector('i.fa-flag')

    priorityOptionsBtns.forEach(item => item.addEventListener('click', function() {
        priorityIcon.setAttribute('value', Array.prototype.indexOf.call(priorityOptionsBtns,item))
        ScreenRender.removeTempMenu(document.querySelector('.temp-menu'))
    }))
}

return {createAddBtnListener,
        createCancelBtnListener,
        createInputPriorityIconListener,
        createPriorityOptionListener,
        createInputTagsIconListener,
        createTagsOptionListener,
        createMenuItemsListener,
        createNewListItemInputListener,
        createNewListItemAddBtnListener,
        createNewListItemCancelBtnListener,
        createTaskOptionListener,
        removeElementBluredListener,
        createPriorityOptionListenerModal}
})()

export {dynamicListeners}
