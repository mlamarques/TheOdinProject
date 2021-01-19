function menuTab() {
    const TabsContent = document.querySelector("div.tab__content")
    if (TabsContent.hasChildNodes()) {
        TabsContent.innerHTML = ''
    }
    //const headerDiv = document.createElement("div")
    //headerDiv.classList.add("header")
    //const newMenuTab = document.createElement("div")
    //newMenuTab.classList.add("tab-wrap")
    const newMenuTab = document.createElement("div")
    newMenuTab.classList.add("tab__content")
    const pageTitle = document.createElement("h3")
    pageTitle.innerText = "MENU"
    const homeTxt = document.createElement("p")
    //imageCaption.setAttribute("id", "img-caption")
    homeTxt.innerText = "This is the menu: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet"

    //pageContent.appendChild(headerDiv)
    TabsContent.appendChild(newMenuTab)
    newMenuTab.appendChild(pageTitle)
    newMenuTab.appendChild(homeTxt)
}

export {menuTab}