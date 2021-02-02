//TODO
//create add button do insert new list and tags
//

import {ScreenRender} from './domElements.js'
import {createNewTask, saveToLocalStorage, filterByToday, filterBySevenDays,filterByNoDate, filterByImportant} from './create-object.js'
import { toDate, parseISO } from 'date-fns'


console.log("starting application")

let myTasks = []
if (localStorage != null) {
    myTasks  = JSON.parse(localStorage.getItem('myTasks'))
}

let myList = ["home", "work"]
let myTags = ["cool", "learning"]

ScreenRender.createMyListItems(myList)
ScreenRender.createTagsItems(myTags)

const allMenuElements = document.querySelectorAll(".vertical-menu a")
const myListItems = document.querySelector("[data-myListItems]")
myListItems.style.display = "none"
const tagsItems = document.querySelector("[data-tagsItems]")
tagsItems.style.display = "none"



//menu item bold on focus
allMenuElements.forEach(item => item.addEventListener('click', function() {
    for (let i = 0; i < allMenuElements.length; i++) {
        allMenuElements[i].style.fontWeight = "400"
    }
    if (this.parentElement.classList.contains("list-filter")) {
        let childrenList = item.parentElement.children
        for (let i=0; i < childrenList.length; i++) {
            childrenList[i].style.fontWeight = "600"
        }
    } else {
        this.style.fontWeight = "600"
    }
    

    if (item.parentElement.classList.contains("menu-item") || item.parentElement.classList.contains("list-item")) {
        document.querySelector(".main-title h1").innerHTML = this.innerHTML
        document.querySelector("[data-addtaskbtncontainer]").style.display = 'block'
    }   

}))

//open dropdown menu
document.querySelectorAll(".list-title").forEach(item => item.addEventListener('click', function() {
    const l = this.previousElementSibling
    l.classList.toggle("active")
    if (l.classList.contains("active")) {
        this.parentElement.nextElementSibling.style.display = "block"
        //tagsItems.style.display = "block"
    } else {
        this.parentElement.nextElementSibling.style.display = "none"
        //myListItems.style.display = "none"
        //tagsItems.style.display = "none"
    }
        // for (let i = 0; i < l.length; i++) {
        //     if (l[i].style.display === "none") {
        //         l[i].style.display = "block";
        //       } else {
        //         l[i].style.display = "none";
        //       }      
        // }
        //l.classList.toggle("active")
    
}))

//input new task
document.querySelector("div.main-add-task a").onclick = () => {
    if (!document.querySelector("div.main-input-task")) {
        ScreenRender.createInputBox()
        document.querySelector(".add-btn").addEventListener('click', () => {
            createNewTask(myTasks, 
                         document.querySelector(".input-box-top input").value,
                         document.querySelector(".input-box-bottom input").value,
                         document.querySelectorAll(".input-box-bottom .tags-list a")
                        )
            
            ScreenRender.cleanInputFields()
            
            saveToLocalStorage(myTasks)
            ScreenRender.createTaskElement(myTasks[myTasks.length -1])
        })
        document.querySelector(".cancel-btn").addEventListener('click', () => {
            ScreenRender.removeInputBox()
        })
    }
    //menu priority new task 
    const iconPriorityInput = document.querySelector('.input-box-bottom i.fa-flag')
    iconPriorityInput.onclick = (e) => {
        if (!document.querySelector('.temp-menu')) {
            ScreenRender.createMenuPriority(e)
        document.querySelectorAll('.temp-menu a')[0].onclick = () => {
            iconPriorityInput.setAttribute('value', 0)
            ScreenRender.removeMenuPriority()
        }
        document.querySelectorAll('.temp-menu a')[1].onclick = () => {
            iconPriorityInput.setAttribute('value', 1)
            ScreenRender.removeMenuPriority()
        }
        document.querySelectorAll('.temp-menu a')[2].onclick = () => {
            iconPriorityInput.setAttribute('value', 2)
            ScreenRender.removeMenuPriority()
        }
        }    
    }
    //tags menu
    const iconMenuTags = document.querySelector('.input-box-bottom i.fa-tags')
    iconMenuTags.onclick = (e) => {
        const tempTagMenu = document.querySelector(".temp-tags-menu")
        if (!tempTagMenu) {
            ScreenRender.createMenuTags(e, myTags)
            
            const menuTags = document.querySelectorAll(".temp-tags-menu a")
            menuTags.forEach(item => item.addEventListener('click', () => {
                if(!document.querySelector(".input-box-bottom .tags-list").innerHTML.includes(item.innerHTML)) {
                    ScreenRender.addTagToTaskBox(item)
                }
                ScreenRender.removeMenuTags()
            }))
        }
        
        
    } 
}

function generalItems(tasks) {
    ScreenRender.cleanMainDiv()
    const todayTasks = filterByNoDate(tasks)
    for (let i = 0; i < todayTasks.length; i++) {
        ScreenRender.createTaskElement(todayTasks[i])
    }
}

function todayItems(tasks) {
    ScreenRender.cleanMainDiv()
    const todayTasks = filterByToday(tasks)
    for (let i = 0; i < todayTasks.length; i++) {
        ScreenRender.createTaskElement(todayTasks[i])
    }
}

function upcomingItems(tasks) {
    ScreenRender.cleanMainDiv()
    const todayTasks = filterBySevenDays(tasks)
    for (let i = 0; i < todayTasks.length; i++) {
        ScreenRender.createTaskElement(todayTasks[i])
    }
}

function importantItems(tasks) {
    ScreenRender.cleanMainDiv()
    const todayTasks = filterByImportant(tasks)
    for (let i = 0; i < todayTasks.length; i++) {
        ScreenRender.createTaskElement(todayTasks[i])
    }
}

//today General
document.querySelector('[data-verticalMenuGeneral] a').addEventListener('click', () => {
    generalItems(myTasks)
})

//today listener
document.querySelector('[data-verticalMenuToday] a').addEventListener('click', () => {
    todayItems(myTasks)
})

//today upcoming
document.querySelector('[data-verticalUpcoming] a').addEventListener('click', () => {
    upcomingItems(myTasks)
})

//today important
document.querySelector('[data-verticalMenuImportant] a').addEventListener('click', () => {
    importantItems(myTasks)
})


//create new list
document.querySelector('[data-mylistmenu] a.add-list').onclick = () => {
    if (!document.querySelector("[data-myListItems] div.input-temp-box")) {
        ScreenRender.createNewListItemInput()
        document.querySelector('.input-temp-box input').focus()
        document.querySelector('.input-temp-box input').addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
              document.querySelectorAll('.input-temp-box button')[0].click();
            }
        })
    }
    //createNewMenuListItem(e)
    if (!document.querySelector('[data-mylistmenu] span.drop').classList.contains("active")) {
        document.querySelectorAll('.list-title')[0].click()
    }

    //e.path[0].parentElement.nextElementSibling.style.display = "block"
    
    document.querySelectorAll('.input-temp-box button')[0].addEventListener('click', () => {
        const textInputItem = document.querySelector('.input-temp-box input').value
        if (textInputItem != '') {
            myList.push(textInputItem)
        }
        ScreenRender.removeListItemInput()
        ScreenRender.createMyListItems(myList)
        
    })

    document.querySelectorAll('.input-temp-box button')[1].addEventListener('click', () => {
        ScreenRender.removeListItemInput()
    })
}

window.onclick = function(event, tagmenu) {
    if (event.target == tagmenu) {
        ScreenRender.removeMenuTags()
    }
  }