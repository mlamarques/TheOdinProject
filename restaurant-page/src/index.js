import {pageLoad} from './initial-page.js'
import {homeTab} from './homeTab.js'
import {menuTab} from './menuTab.js'
import {contactTab} from './contactTab.js'

console.log("start project")
const tabHome = document.querySelector("#home-tab")
const tabMenu = document.querySelector("#menu-tab")
const tabContact = document.querySelector("#contact-tab")

pageLoad()

tabHome.addEventListener('click', homeTab)
tabMenu.addEventListener('click', menuTab)
tabContact.addEventListener('click', contactTab)
