function homeTab() {
    const TabsContent = document.querySelector("div.tab__content")
    if (TabsContent.hasChildNodes()) {
        TabsContent.innerHTML = ''
    }
    const newHomeTab = document.createElement("div")
    newHomeTab.classList.add("tab__content")
    const pageTitle = document.createElement("h3")
    pageTitle.innerText = "Le Cottage Bleu"
    const imageDiv = document.createElement("figure")
    imageDiv.setAttribute("id", "img-div")
    const imageFile = document.createElement("img")
    imageFile.setAttribute("src", "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
    imageFile.setAttribute("alt", "cooking photo")
    imageFile.setAttribute("height", "400rem")
    const homeTxt = document.createElement("p")
    //imageCaption.setAttribute("id", "img-caption")
    homeTxt.innerText = "First class cuisine."

    //pageContent.appendChild(headerDiv)
    TabsContent.appendChild(newHomeTab)
    newHomeTab.appendChild(pageTitle)
    newHomeTab.appendChild(imageDiv)
    imageDiv.appendChild(imageFile)
    newHomeTab.appendChild(homeTxt)
}

export {homeTab}