import {ScreenRender} from './domElements.js'
import {dynamicListeners} from './dynamicListeners'
import {filterByToday, filterBySevenDays,filterByDate, filterByImportant} from './create-object.js'

function generalItems(tasks) {
    ScreenRender.cleanMainDiv()
    // const todayTasks = filterByNoDate(tasks)
    // for (let i = 0; i < todayTasks.length; i++) {
    //     ScreenRender.createTaskElement(todayTasks[i])
    // }
    const todayTasks = filterByDate(tasks)
    for (let i = 0; i < todayTasks.length; i++) {
            ScreenRender.createTaskElement(todayTasks[i])
        }
        dynamicListeners.createTaskOptionListener()
}

function todayItems(tasks) {
    ScreenRender.cleanMainDiv()
    const todayTasks = filterByToday(tasks)
    for (let i = 0; i < todayTasks.length; i++) {
        ScreenRender.createTaskElement(todayTasks[i])
    }
    dynamicListeners.createTaskOptionListener()
}

function upcomingItems(tasks) {
    ScreenRender.cleanMainDiv()
    const todayTasks = filterBySevenDays(tasks)
    for (let i = 0; i < todayTasks.length; i++) {
        ScreenRender.createTaskElement(todayTasks[i])
    }
    dynamicListeners.createTaskOptionListener()
}

function importantItems(tasks) {
    ScreenRender.cleanMainDiv()
    const todayTasks = filterByImportant(tasks)
    for (let i = 0; i < todayTasks.length; i++) {
        ScreenRender.createTaskElement(todayTasks[i])
    }
    dynamicListeners.createTaskOptionListener()
}

export {generalItems, todayItems, upcomingItems, importantItems}