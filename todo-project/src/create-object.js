import { format, parseISO, addDays} from 'date-fns'
import { ID } from './ID'
import {myList} from  './index'

const taskObj = (titleTxt) => {
    const idTask = ID()
    const title = titleTxt
    const listName = ''
    const dueDate = undefined
    const tags = []
    const priority = 0
    const description = ''
    const taskDone = false
    const timeCreated = Date()
    return {idTask, title, dueDate, listName, tags, priority, description, taskDone, timeCreated}
}

function createNewTask(taskList, title, dueDate, alltags) {
    let newTask = taskObj(title)

    newTask.listName = myList.includes(document.querySelector('.main-title h1').innerText) ? document.querySelector('.main-title h1').innerText : ""
    newTask.priority = document.querySelector('.input-box-bottom i.fa-flag').getAttribute('value') || 0
    newTask.dueDate = dueDate
    for (let i=0; i < alltags.length; i++) {
        newTask.tags.push(alltags[i].innerText)
        console.log(alltags[i].innerText)
    }
    console.log(alltags)
    taskList.push(newTask)
}

function taskRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele.idTask != value; 
    });
}


function saveToLocalStorage(list) {
    localStorage.setItem(`myTasks`, JSON.stringify(list))
}

function clearLocalStorage() {
    localStorage.clear()
}

function filterByDate(list) {
    return list.sort((a, b) => a.dueDate > b.dueDate ? 1 : -1)
}

function filterByNoDate(list) {
    return list.filter(a => a.dueDate == "")
}

function filterByToday(list) {
    return list.filter(a => parseISO(a.dueDate).setHours(0,0,0,0) == new Date().setHours(0,0,0,0))
}

function filterBySevenDays(list) {
    return list.filter(a => parseISO(a.dueDate).setHours(0,0,0,0) <= addDays(new Date().setHours(0,0,0,0), 7))
}

function filterByImportant(list) {
    return list.filter(a => a.priority == 2)
}

//MODAL
function saveEditedChanges(obj, list, title, date, priority) {
    obj.listName = list
    obj.title = title
    obj.dueDate = date
    obj.priority = priority
}

export {createNewTask, saveToLocalStorage, taskRemove, filterByToday, filterBySevenDays,filterByNoDate, filterByImportant, filterByDate, saveEditedChanges}