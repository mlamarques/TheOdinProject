import { addDays, compareAsc, format, parseISO } from 'date-fns'

function createInputBox () {
    const addTaskBtnContainer = document.querySelector("[data-addTaskBtnContainer]")
    //inputBox
    const divInputBoxContainer = document.createElement('div')
    const divMainInputBox = document.createElement('div')
    const divInputBoxTop = document.createElement('div')
    const inputTitle = document.createElement('input')
    const divInputBoxBottom = document.createElement('div')
    const divChildBoxBottom = document.createElement('div')
    const pickDate = document.createElement('input')
    const anchList = document.createElement('a')
    const anchTag = document.createElement('a')
    const anchPriority = document.createElement('a')
    //const iconPriority = ducument.createElement('i')
    //Btn
    const divBtnContainer = document.createElement('div')
    const divAddBtn = document.createElement('div')
    const btnAdd = document.createElement('button')
    const divCancelBtn = document.createElement('div')
    const btnCancel = document.createElement('button')


    //add attributes
        //inputBox
    divInputBoxContainer.classList.add("main-input-task")
    divMainInputBox.classList.add("main-input-box")
    divInputBoxTop.classList.add("input-box-top")
    inputTitle.setAttribute("type", "text")
    inputTitle.setAttribute("placeholder", "I want to...")
    divInputBoxBottom.classList.add("input-box-bottom")
    divChildBoxBottom.classList.add("tags-list")
    pickDate.setAttribute("type", "date")
    //anchList.innerHTML = `<i class="fas fa-list fa-lg"></i>`
    anchTag.innerHTML = `<i class="fas fa-tags fa-lg"></i>`
    anchPriority.innerHTML = `<i class="fas fa-flag fa-lg"></i>`
        //Btn
    divBtnContainer.classList.add("main-btn-container")
    divAddBtn.classList.add("main-add-btn")
    btnAdd.classList.add("add-btn")
    btnAdd.innerHTML = "Add task"
    divCancelBtn.classList.add("main-cancel-btn")
    btnCancel.classList.add("cancel-btn")
    btnCancel.innerHTML = "Cancel"

    //add to DOM
        //inputBox
    addTaskBtnContainer.appendChild(divInputBoxContainer)
    divInputBoxContainer.appendChild(divMainInputBox)
    divMainInputBox.appendChild(divInputBoxTop)
    divInputBoxTop.appendChild(inputTitle)
    divMainInputBox.appendChild(divInputBoxBottom)
    divInputBoxBottom.appendChild(divChildBoxBottom)
    divInputBoxBottom.appendChild(pickDate) 
    //divInputBoxBottom.appendChild(anchList)
    divInputBoxBottom.appendChild(anchTag)
    divInputBoxBottom.appendChild(anchPriority)
    
        //Btn
    addTaskBtnContainer.appendChild(divBtnContainer)
    divBtnContainer.appendChild(divAddBtn)
    divAddBtn.appendChild(btnAdd)
    divBtnContainer.appendChild(divCancelBtn)
    divCancelBtn.appendChild(btnCancel)
}

function removeInputBox() {
    const addTaskBtnContainer = document.querySelector("[data-addTaskBtn]")
    addTaskBtnContainer.nextElementSibling.remove()
    addTaskBtnContainer.nextElementSibling.remove()
}


function createTaskElement (obj) {
    const allTasksContainer = document.querySelector("[data-containerAllTasks]")

    const divTaskContainer = document.createElement('div')
    const divTask = document.createElement('div')
    const divTaskTop = document.createElement('div')
    const divTaskCheck = document.createElement('div')
    const inputTaskCheck = document.createElement('input')
    //const iconTaskCheck = document.createElement('i')
    const divTaskTitle = document.createElement('div')
    const textTaskTitle = document.createElement('h4')
    const divTaskBottom = document.createElement('div')
    const divDueDate = document.createElement('div')
    const iconDueDate = document.createElement('i')
    const dueDateText = document.createElement('h4')
    const divTaskTags = document.createElement('div')
    const divTaskList = document.createElement('div')
    const textTaskList = document.createElement('h4')

    const divTaskOptions = document.createElement('div')
    const anchTaskOptions = document.createElement('a')  
    
    //add attributes
    divTaskContainer.classList.add("task-container")
    divTask.classList.add("task") 
    divTaskTop.classList.add("task-top") 
    divTaskCheck.classList.add("task-check")  
    divTaskCheck.setAttribute("value", obj.priority)
    inputTaskCheck.classList.add("checkbox-round")
    inputTaskCheck.setAttribute("type", "checkbox")
    divTaskTitle.classList.add("task-title")  
    divTaskBottom.classList.add("task-bottom") 
    divDueDate.classList.add("task-due-date")  
    iconDueDate.classList.add("far", "fa-calendar-alt", "fa-lg") 
    divTaskTags.classList.add("task-tags") 
    divTaskList.classList.add("task-list") 

    divTaskOptions.classList.add("task-options")
    anchTaskOptions.innerHTML = `<i class="fas fa-ellipsis-h fa-lg"></i>`
    
    //add values
    divTask.setAttribute("id", obj.idTask)
    textTaskTitle.innerText = obj.title
    //const today = format(new Date(), 'yyyy-MM-dd')
    const today = new Date().setHours(0,0,0,0)
    const objDate = parseISO(obj.dueDate).setHours(0,0,0,0)
    const tomorrow = addDays(today, 1)
    if (compareAsc(objDate, today) == 0) {
        dueDateText.innerText = "Today"
        iconDueDate.style.color = "blue"
        dueDateText.style.color = "blue"
    } else if (compareAsc(objDate, tomorrow) == 0) {
        dueDateText.innerText = "Tomorrow"
        iconDueDate.style.color = "green"
        dueDateText.style.color = "green"
    } else {
        dueDateText.innerText = obj.dueDate
    }
    
    textTaskList.innerText = obj.listName
    
   
    obj.tags.forEach(element => {
        let tempA = document.createElement('a')
        tempA.innerText = element
        divTaskTags.appendChild(tempA)  
    })

    //add to DOM
    allTasksContainer.appendChild(divTaskContainer)
    divTaskContainer.appendChild(divTask)
    divTask.appendChild(divTaskTop)

    divTaskTop.appendChild(divTaskCheck)
    divTaskCheck.appendChild(inputTaskCheck)
    divTaskTop.appendChild(divTaskTitle)
    divTaskTitle.appendChild(textTaskTitle)
    divTask.appendChild(divTaskBottom)
    divTaskBottom.appendChild(divDueDate)
    divDueDate.appendChild(iconDueDate)
    divDueDate.appendChild(dueDateText)
    divTaskBottom.appendChild(divTaskTags)
    divTaskBottom.appendChild(divTaskList)
    divTaskList.appendChild(textTaskList)

    divTaskContainer.appendChild(divTaskOptions)
    divTaskOptions.appendChild(anchTaskOptions)
}

function cleanInputFields() {
    document.querySelector(".input-box-top input").value = ''
    document.querySelector(".input-box-bottom input").value = ''
    //document.querySelector(".input-box-bottom div")
}

function createMenuTags(e, tagslist) {
    const mainDivTags = document.createElement('div')
    mainDivTags.classList.add("temp-tags-menu")
    tagslist.forEach(element => {
        let tempA = document.createElement('div')
            let tempB = document.createElement('a')
            tempB.innerHTML = element
            tempA.appendChild(tempB)
            mainDivTags.appendChild(tempA)          
    });
    
    const body = document.querySelector('body')
    body.appendChild(mainDivTags)
    mainDivTags.setAttribute('style', `position: absolute; background-color: green; left: ${e.pageX}px; top: ${e.pageY}px`)
    mainDivTags.style.zIndex = 13
}

function addTagToTaskBox(element) {
    const divTags = document.querySelector(".input-box-bottom .tags-list")
    const anchTag = document.createElement('a')
    anchTag.innerHTML = element.innerText
    divTags.appendChild(anchTag)
}

function removeMenuTags() {
    document.querySelector(".temp-tags-menu").remove()
}

function createMenuPriority(e) {
    const divContainer = document.createElement('div')
    const divTitle = document.createElement('div')
    const textTitle = document.createElement('h4')
    const divOptions = document.createElement('div')
    const divOption0 = document.createElement('div')
    const anchOption0 = document.createElement('a')
    const divOption1 = document.createElement('div')
    const anchOption1 = document.createElement('a')
    const divOption2 = document.createElement('div')
    const anchOption2 = document.createElement('a')

    divContainer.classList.add('temp-menu')
    textTitle.innerText = 'Select Priority'
    anchOption0.innerText = 'Low'
    anchOption1.innerText = 'Medium'
    anchOption2.innerText = 'High'

    const body = document.querySelector('body')
    body.appendChild(divContainer)
    divContainer.appendChild(divTitle)
    divTitle.appendChild(textTitle)
    divContainer.appendChild(divOptions)
    divOptions.appendChild(divOption0)
    divOption0.appendChild(anchOption0)
    divOptions.appendChild(divOption1)
    divOption1.appendChild(anchOption1)
    divOptions.appendChild(divOption2)
    divOption2.appendChild(anchOption2)

    divContainer.setAttribute('style', `position: absolute; background-color: white; left: ${e.pageX}px; top: ${e.pageY}px`)
    divContainer.style.zIndex = 12
}

function removeMenuPriority() {
    document.querySelector('.temp-menu').remove()
}

function createTaskOptionMenu () {

}

function createMyListItems(itemsList) {
    //const verticalMenu = document.querySelector("[data-verticalMenu]")
    const myListMenu = document.querySelector("[data-myListItems]")
    myListMenu.innerHTML = ''
    //const myListMenuItems = document.querySelectorAll(".list-item")
    // for (let i=0; i < myListMenuItems.length; i++) {
    //     myListMenu.removeChild(myListMenuItems[i])
    // }
    
    for (let i=0; i < itemsList.length; i++) {
        const divItem = document.createElement('div')
        const anchItem = document.createElement('a')

        divItem.classList.add("list-item")
        anchItem.innerHTML = `${itemsList[i]}`

        myListMenu.appendChild(divItem)
        divItem.appendChild(anchItem)
    }
}

function createTagsItems(itemsList) {
    const myListMenu = document.querySelector("[data-tagsItems]")
    myListMenu.innerHTML = ''

    for (let i=0; i < itemsList.length; i++) {
        const divItem = document.createElement('div')
        const anchItem = document.createElement('a')

        divItem.classList.add("list-item")
        anchItem.innerHTML = `${itemsList[i]}`

        myListMenu.appendChild(divItem)
        divItem.appendChild(anchItem)
    }
}

function createTaskMenuOptions(e) {
    const divContainer = document.createElement('div')
    divContainer.classList.add('new-list-item')
    const body = document.querySelector('body')
    body.appendChild(divContainer)
    divContainer.setAttribute('style', `left: ${e.pageX}px; top: ${e.pageY}px`)
    divContainer.setAttribute('z-index', '12')
}

function createNewListItemInput() {
    const myListMenu = document.querySelector("[data-myListItems]")
    const divItem = document.createElement('div')
    const divInput = document.createElement('div')
    const inputItem = document.createElement('input')
    const divContainerAddCancel = document.createElement('div')
    const divAddBtn = document.createElement('div')
    const btnAdd = document.createElement('button')
    const divCancelBtn = document.createElement('div')
    const btnCancel = document.createElement('button')

    divItem.classList.add("input-temp-box")
    inputItem.setAttribute("type", "text")
    btnAdd.innerHTML = 'add'
    btnCancel.innerHTML = 'cancel'

    myListMenu.appendChild(divItem)
    divItem.appendChild(divInput)
    divInput.appendChild(inputItem)
    divItem.appendChild(divContainerAddCancel)
    divContainerAddCancel.appendChild(divAddBtn)
    divContainerAddCancel.appendChild(divCancelBtn)
    divAddBtn.appendChild(btnAdd)
    divCancelBtn.appendChild(btnCancel)
}

function removeListItemInput() {
    const divInputItem = document.querySelector('.input-temp-box')
    divInputItem.remove()
}

function cleanMainDiv() {
    document.querySelector(".container-all-task").innerHTML = ''
    document.querySelector(".main-container-add-task").style.display = 'none'
}

export {createInputBox,
     createTaskElement,
      removeInputBox,
       createMyListItems,
        createTagsItems,
         cleanInputFields,
          createNewListItemInput,
           removeListItemInput,
            createMenuPriority,
            removeMenuPriority,
            createMenuTags,
            removeMenuTags,
            addTagToTaskBox,
            cleanMainDiv}