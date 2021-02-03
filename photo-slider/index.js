

let timeoutConst

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function removePhotosDisplay() {
    document.querySelectorAll('.photo-display').forEach((item) => {
        //item.removeAttribute('style')
        //item.style.display = 'none'
        item.classList.remove('opc')
    })
}

function displayPhoto(item) {
    removePhotosDisplay()
    //document.querySelector("[data-photo='" + item + "']").style.display = 'flex'
    document.querySelector("[data-photo='" + item + "']").classList.add('opc')
}

let photoPosition = 0

function rotatePhotosRight() {
     if (photoPosition === document.querySelectorAll('.photo-display').length) {
        photoPosition = 0;
     }
     displayPhoto(photoPosition)
     photoPosition++
     //setTimeout(rotatePhotosRight, 5 * 1000) 
     timeoutConst = setTimeout(rotatePhotosRight, 5000);
     console.log('counting')
     
}

function fillThumbsUp(num) {
    document.querySelectorAll('.idle-thumb').forEach(item => () => {
        if (item.parentElement.getAttribute(['data-item']) <= num) {
            item.parentElement.classList.add('fill')
        }
    })
}

function myStopFunction() {
    clearTimeout(timeoutConst);
  }

function clickPhotosRight() {
    myStopFunction()
    rotatePhotosRight()
}

function clickPhotosLeft() {
    if (photoPosition === 1) {
        photoPosition += 3
    } else {
        photoPosition -= 2
    }
    myStopFunction()
    rotatePhotosRight()
}

document.querySelectorAll('.idle-thumb').forEach(item => item.addEventListener('click', () => {
    //displayPhoto(item.parentElement.getAttribute(['data-item']))
    photoPosition = item.parentElement.getAttribute(['data-item'])
    myStopFunction()
    rotatePhotosRight()
}))

document.querySelectorAll('.btn-container i').forEach(item => item.addEventListener('click', () => {
    item.classList.add('playing')
    if (item.classList.contains('fa-chevron-left')) {
        clickPhotosLeft()
    }
    if (item.classList.contains('fa-chevron-right')) {
        clickPhotosRight()
    }
}))

document.querySelectorAll('.btn-container i').forEach(item => item.addEventListener('transitionend', removeTransition))

// document.querySelector('.fa-chevron-left').addEventListener('click', () => {
//     clickPhotosLeft()
// })

// document.querySelector('.fa-chevron-right').addEventListener('click', () => {
//     clickPhotosRight()
// })

window.onload = rotatePhotosRight

// document.querySelectorAll('.progress')[0].style.transition = '0ms'
// "0ms"
// document.querySelectorAll('.progress')[0].classList.toggle('running')
// false
// document.querySelectorAll('.progress')[0].removeAttribute('style', "transition")
// undefined
// document.querySelectorAll('.progress')[0].classList.toggle('running')
// true