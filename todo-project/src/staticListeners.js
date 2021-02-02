import {saveEditedChanges, saveToLocalStorage} from './create-object.js'
import {dynamicListeners} from './dynamicListeners'
import {generalItems, todayItems, upcomingItems, importantItems} from './filter-display'
import {ScreenRender} from './domElements.js'
import {myTasks, myList, myTags} from  './index'

const verticalMenuListsTitle = document.querySelectorAll(".list-title")
const verticalMenuListsArrow = document.querySelectorAll(".list-filter .drop a")
const verticalMenuListsAddItem = document.querySelectorAll(".list-filter a.add-list")
const createNewTask = document.querySelector("div.main-add-task a")
const mainContainerAllTasks = document.querySelector('.container-all-task')
// const modalEditTaskList
// const modalEditTaskTitle
// const modalEditTaskDueDate
// const modalEditTaskTitle


//open dropdown - List Title click
verticalMenuListsTitle.forEach(item => item.addEventListener('click', function() {
    this.previousElementSibling.classList.toggle("active")
    if (this.previousElementSibling.classList.contains("active")) {
        this.parentElement.nextElementSibling.style.display = "block"
    } else {
        this.parentElement.nextElementSibling.style.display = "none"
    }    
}))

//open dropdown - arrow click
verticalMenuListsArrow.forEach(item => item.addEventListener('click', function() {
    this.parentElement.classList.toggle("active")
    if (this.parentElement.classList.contains("active")) { //.getAttributeNode('class').value.includes('active')
        this.parentElement.parentElement.nextElementSibling.style.display = "block"
    } else {
        this.parentElement.parentElement.nextElementSibling.style.display = "none"
    }    
}))

//create new list
verticalMenuListsAddItem.forEach(item => item.addEventListener('click', function() {

    if (!document.querySelector("div.input-temp-box")) {
        ScreenRender.createNewListItemInput(this)
    }
    if (!item.parentElement.firstElementChild.classList.contains("active")) {
        item.parentElement.nextElementSibling.style.display = "block"
    }

    if (item.parentElement == verticalMenuListsTitle[0].parentElement) {
        dynamicListeners.createNewListItemAddBtnListener(myList)
    }
    if (item.parentElement == verticalMenuListsTitle[1].parentElement) {
        dynamicListeners.createNewListItemAddBtnListener(myTags)
    }

    dynamicListeners.createNewListItemCancelBtnListener()
    dynamicListeners.createNewListItemInputListener() 
}))

createNewTask.addEventListener('click', () => {
    if (!document.querySelector("div.main-input-task")) {
        ScreenRender.createInputBox()
        dynamicListeners.createAddBtnListener(myTasks)
        dynamicListeners.createCancelBtnListener()
        dynamicListeners.createInputPriorityIconListener()
        dynamicListeners.createInputTagsIconListener(myTags)
    }
})

//General listener
document.querySelector('[data-verticalMenuGeneral] a').addEventListener('click', () => {
    generalItems(myTasks)
    mainContainerAllTasks.innerText == "" ? mainContainerAllTasks.innerText = "You have no tasks" : mainContainerAllTasks.innerText
})

//today listener
document.querySelector('[data-verticalMenuToday] a').addEventListener('click', () => {
    todayItems(myTasks)
    mainContainerAllTasks.innerText == "" ? mainContainerAllTasks.innerText = "You have no tasks for today" : mainContainerAllTasks.innerText
})

//upcoming listener
document.querySelector('[data-verticalUpcoming] a').addEventListener('click', () => {
    upcomingItems(myTasks)
    mainContainerAllTasks.innerText == "" ? mainContainerAllTasks.innerText = "You have no upcoming tasks" : mainContainerAllTasks.innerText
})

//important listener
document.querySelector('[data-verticalMenuImportant] a').addEventListener('click', () => {
    importantItems(myTasks)
    mainContainerAllTasks.innerText == "" ? mainContainerAllTasks.innerText = "You have no important tasks" : mainContainerAllTasks.innerText
})

//MODAL

    const modalSection = document.querySelector('.edit-task-section')
    const modalPriorityIcon = document.querySelector('.task-fields-card i.fa-flag')
    const modalTaskClose = document.querySelector('.task-fields-card i.fa-times')
    const modalTaskSaveBtn = document.querySelector('.task-fields-card .save-btn')
    const modalTaskCancelBtn = document.querySelector('.task-fields-card .cancel-btn')  

    modalPriorityIcon.addEventListener('click', (e) => {
        if (!document.querySelector('.temp-menu')) {
            ScreenRender.createMenuPriority(e)
            dynamicListeners.createPriorityOptionListenerModal()
            document.querySelector('.temp-menu').focus()
            dynamicListeners.removeElementBluredListener(document.querySelector('.temp-menu'), ScreenRender.removeTempMenu, document.querySelector('.temp-menu'))
        }  
    }) 

    modalTaskClose.addEventListener('click', () => {
        modalSection.style.display = 'none'
    })

    modalTaskCancelBtn.addEventListener('click', () => {
        modalSection.style.display = 'none'
    })

    modalTaskSaveBtn.addEventListener('click', () => {
        const selectedObj = myTasks.find(x => x.idTask == document.querySelector('.task-fields-card').getAttribute('value'))

        saveEditedChanges(selectedObj, document.querySelector('.task-fields-card h2').innerText, document.querySelector('.task-fields-card .task-title h4').innerText, document.querySelector(".task-fields-card .task-bottom-right input").value, document.querySelector(".task-fields-card .fa-flag").getAttribute('value'))
        saveToLocalStorage(myTasks)
        ScreenRender.pageRender(document.querySelector(".main-title h1").innerText)
        modalSection.style.display = 'none'
    })

    




//////////////////////////////////////////////
