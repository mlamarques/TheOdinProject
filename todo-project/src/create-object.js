import { format, parseISO, addDays} from 'date-fns'
import { ID } from './ID'

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

function createNewTask(itemLists, title, dueDate, alltags) {
    let newTask = taskObj(title)

    newTask.listName = document.querySelector(".main-title h1").innerText || ""
    newTask.priority = document.querySelector('.input-box-bottom i.fa-flag').getAttribute('value') || 0
    newTask.dueDate = dueDate
    for (let i=0; i < alltags.length; i++) {
        newTask.tags.push(alltags[i].innerText)
    }

    itemLists.push(newTask)
}

function saveToLocalStorage(list) {
    localStorage.setItem('myTasks', JSON.stringify(list))
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


export {createNewTask, saveToLocalStorage, filterByToday, filterBySevenDays,filterByNoDate, filterByImportant}