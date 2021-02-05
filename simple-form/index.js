
function autocompleteCountry(inp, arr) {
    let currentFocus

    inp.addEventListener("input", function(e) {
        let listItems = this.value
        let itemDiv = this.value
        let i = this.value
        let val = this.value

        closeAllLists()
        if (!val) { return false}
        currentFocus = -1

        listItems = document.createElement("DIV");
        listItems.setAttribute("id", this.id + "autocomplete-list");
        listItems.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(listItems);
        listItems.setAttribute('style', `left: ${this.parentNode.offsetLeft}px; top: ${this.parentNode.offsetTop + this.parentNode.offsetHeight}px; width: ${this.parentNode.offsetWidth}px`)

        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
              /*create a DIV element for each matching element:*/
              itemDiv = document.createElement("DIV");
              /*make the matching letters bold:*/
              itemDiv.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
              itemDiv.innerHTML += arr[i].substr(val.length);
              /*insert a input field that will hold the current array item's value:*/
              itemDiv.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              /*execute a function when someone clicks on the item value (DIV element):*/
              itemDiv.addEventListener("click", function(e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
                  closeAllLists();
              });
              listItems.appendChild(itemDiv);
            }
          }
    })

    inp.addEventListener("keydown", function(e) {
        let itemCountry = document.getElementById(this.id + "autocomplete-list");
        if (itemCountry) itemCountry = itemCountry.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(itemCountry);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(itemCountry);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (itemCountry) itemCountry[currentFocus].click();
          }
        }
    })

    function addActive(item) {
        /*a function to classify an item as "active":*/
        if (!item) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(item);
        if (currentFocus >= item.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (item.length - 1);
        /*add class "autocomplete-active":*/
        item[currentFocus].classList.add("autocomplete-active");
        item[currentFocus].parentNode.scrollTop = (item[currentFocus].scrollHeight * currentFocus) - item[currentFocus].scrollHeight
      }
      function removeActive(item) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove("autocomplete-active");
        }
      }
      function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        let itemList = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < itemList.length; i++) {
          if (elmnt != itemList[i] && elmnt != inp) {
            itemList[i].parentNode.removeChild(itemList[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
}




function validateEmail(email) {
    const emailRegex = /^([\w\.-])+(@+[a-z0-9]+\.com)(\.[a-z]+)?$/

    return emailRegex.test(email)
}

function validateZipCode(zip) { //valor em str
    const zipCodeRegex = /^[0-9]{5}-?([0-9]{3,4})$/ //zip codes for USA (serve pro brasil -> os 5 primeiros digitos sao para achar a cidade - os 3 ultimos para identificadores de distribuição)

    return zipCodeRegex.test(zip)
}

function validatePassword(password) { //check if contains 3 consec numbers: (?:[0-9][\s\S]*){3}
    
    const passwordRegex = /^[\s\S]{8,32}$/ // one line: /^(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.{8,32}$).*/

    const minMaxLength = /^[\s\S]{8,32}$/
    const upper = /[A-Z]/
    const lower = /[a-z]/
    const number = /[0-9]/
    const special = /[^A-Za-z0-9]/
    let count = 0

    if (minMaxLength.test(password)) {
        if (upper.test(password)) count++
        if (lower.test(password)) count++
        if (number.test(password)) count++
        if (special.test(password)) count++
    }

    return count >= 4
}

function clearFields() {
    emailInput.value = ''
    emailInput.parentElement.nextElementSibling.lastElementChild.style.display = 'none'
    countryInput.value = ''
    countryInput.parentElement.nextElementSibling.lastElementChild.style.display = 'none'
    zipCodeInput.value = ''
    zipCodeInput.parentElement.nextElementSibling.lastElementChild.style.display = 'none'
    passwordInput.value = ''
    passwordInput.parentElement.nextElementSibling.lastElementChild.style.display = 'none'
    passwordInput.parentElement.nextElementSibling.firstElementChild.style.display = 'block'
}


const emailInput = document.querySelector('.email-content input')
const countryInput = document.querySelector('.country-content input')
const zipCodeInput = document.querySelector('.zip-content input')
const passwordInput = document.querySelector('.pass-content input')
const allInput = document.querySelectorAll('.fields-encap input')

const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
                   "Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria",
                   "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
                   "Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana",
                   "Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi",
                   "Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic",
                   "Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire",
                   "Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
                   "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea",
                   "Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France",
                   "French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana",
                   "Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea",
                   "Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India",
                   "Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan",
                   "Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos",
                   "Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
                   "Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
                   "Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco",
                   "Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro",
                   "Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua",
                   "Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama",
                   "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico",
                   "Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino",
                   "Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone",
                   "Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea",
                   "South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan",
                   "Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
                   "Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey",
                   "Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates",
                   "United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City",
                   "Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


emailInput.addEventListener('blur', (e) => {
    if (emailInput.value ==='' || !validateEmail(emailInput.value)) {
        e.target.parentElement.nextElementSibling.lastElementChild.style.display = 'block'
    }
    if (validateEmail(emailInput.value)) {
        e.target.parentElement.nextElementSibling.lastElementChild.style.display = 'none'
    }
})

countryInput.addEventListener('blur', (e) => {
    if (countryInput.value ==='' || !countries.includes(countryInput.value)) {
        e.target.parentElement.nextElementSibling.lastElementChild.style.display = 'block'
    }
    if (countries.includes(countryInput.value)) {
        e.target.parentElement.nextElementSibling.lastElementChild.style.display = 'none'
    }
})

zipCodeInput.addEventListener('blur', (e) => {
    if (zipCodeInput.value ==='' || !validateZipCode(zipCodeInput.value)) {
        e.target.parentElement.nextElementSibling.lastElementChild.style.display = 'block'
    }
    if (validateZipCode(zipCodeInput.value)) {
        e.target.parentElement.nextElementSibling.lastElementChild.style.display = 'none'
    }
})

passwordInput.addEventListener('blur', (e) => {
    if (passwordInput.value ==='' || !validatePassword(passwordInput.value)) {
        e.target.parentElement.nextElementSibling.lastElementChild.style.display = 'block'
        e.target.parentElement.nextElementSibling.firstElementChild.style.display = 'none'
    }
    if (validatePassword(passwordInput.value)) {
        e.target.parentElement.nextElementSibling.lastElementChild.style.display = 'none'
    }
})

document.querySelector('.btn.submit button').addEventListener('click', () => {
    let countNTwo = 0

    if (emailInput.value !== '' && validateEmail(emailInput.value)) {countNTwo++}
    if (countryInput.value !== '' && countries.includes(countryInput.value)) {countNTwo++}
    if (zipCodeInput.value !== '' && validateZipCode(zipCodeInput.value)) {countNTwo++}
    if (passwordInput.value !== '' && validatePassword(passwordInput.value)) {countNTwo++}

    if (countNTwo >= 4) {
        clearFields()
        alert('👍')
    } else {
        alert('Please fill all the fields')
    }
})

document.querySelector('.btn.clear button').addEventListener('click', () => {
    clearFields()
})

autocompleteCountry(document.getElementById("countryInput"), countries)