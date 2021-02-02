//TODO
/*
// MODALTASK: add filter option for List, create edit for tags https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_autocomplete
// Create Copy task Option
// Create Upcoming display dividing tasks by day (every day is a header)
// Style app
*/


import {ScreenRender} from './domElements.js'
import './staticListeners'
import {dynamicListeners} from './dynamicListeners'
import { toDate, parseISO } from 'date-fns'


console.log("starting application")

let myTasks

function createMyTasksArray() {
    if (localStorage.getItem('myTasks') != null) {
        myTasks  = JSON.parse(localStorage.getItem('myTasks'))
    } else {
        myTasks = []
    }
}

function startApplication() {
    const todayMenuItem = document.querySelector("[data-verticalmenutoday] a")
    createMyTasksArray()
    todayMenuItem.click() 
}




let myList = ["home", "work"]
let myTags = ["cool", "learning"]

ScreenRender.createMyListItems(myList)
ScreenRender.createTagsItems(myTags)

const myListItems = document.querySelector("[data-myListItems]")
myListItems.style.display = "none"
const tagsItems = document.querySelector("[data-tagsItems]")
tagsItems.style.display = "none"



//menu item bold on focus
dynamicListeners.createMenuItemsListener()
startApplication()
//open dropdown menu

//input new task



//create new list

export {myTasks, myList, myTags, createMyTasksArray}