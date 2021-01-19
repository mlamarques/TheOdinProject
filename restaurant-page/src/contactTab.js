function contactTab() {
    const TabsContent = document.querySelector("div.tab__content")
    if (TabsContent.hasChildNodes()) {
        TabsContent.innerHTML = ''
    }

    const newContactDiv = document.createElement("div")
    newContactDiv.classList.add("detail-section")
    const iconWrapper = document.createElement("div")
    iconWrapper.classList.add("icon-wrapper")
    const icon = document.createElement("i")
    icon.classList.add("fas", "fa-map-marker-alt")
    const pContact = document.createElement("p")
    pContact.classList.add("content")
    pContact.innerHTML = "Avenida Ayrton Senna da Silva, s/n - Sítio do Campo <br> Praia Grande - SP"

    TabsContent.appendChild(newContactDiv)
    newContactDiv.appendChild(iconWrapper)
    iconWrapper.appendChild(icon)
    newContactDiv.appendChild(pContact)

    const newContactDiv2 = newContactDiv.cloneNode(true)
    newContactDiv2.innerHTML = ''
    const iconWrapper2 = iconWrapper.cloneNode(true)
    iconWrapper2.innerHTML = ''
    const icon2 = document.createElement("i")
    icon2.classList.add("fas", "fa-phone")
    const pContact2 = pContact.cloneNode(true)
    pContact2.innerHTML = "(11) 3922-2100"

    TabsContent.appendChild(newContactDiv2)
    newContactDiv2.appendChild(iconWrapper2)
    iconWrapper2.appendChild(icon2)
    newContactDiv2.appendChild(pContact2)

    const newContactDiv3 = newContactDiv.cloneNode(true)
    newContactDiv3.innerHTML = ''
    const iconWrapper3 = iconWrapper.cloneNode(true)
    iconWrapper3.innerHTML = ''
    const icon3 = document.createElement("i")
    icon3.classList.add("fas", "fa-clock")
    const pContact3 = pContact.cloneNode(true)
    pContact3.innerHTML = "<b>Horário de funcionamento:</b>"
    const pContact4 = pContact.cloneNode(true)
    pContact4.innerHTML = "seg-dom: 18:00 - 23:00"

    TabsContent.appendChild(newContactDiv3)
    newContactDiv3.appendChild(iconWrapper3)
    iconWrapper3.appendChild(icon3)
    newContactDiv3.appendChild(pContact3)
    newContactDiv3.appendChild(pContact4)
}

export {contactTab}