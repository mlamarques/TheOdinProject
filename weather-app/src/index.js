import { format } from 'date-fns'

const myAPIKey = '7be8d98b434601f82127416e7f32ba81'

const myUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=sao+paulo&units=metric&appid=' + myAPIKey
let myUrl2 = 'https://api.openweathermap.org/data/2.5/weather?q=sao+paulo&units=metric&appid=' + myAPIKey
const myIcon = 'http://openweathermap.org/img/wn/'

const myHtmlImage = document.querySelector('#now-icon')
const myInput = document.querySelector('.searchbox input')
const mySubmitBtn = document.querySelector('.search-btn')
const loaderScreen = document.querySelector('.loader-container')

const cityName = document.querySelector('.today-main-city h1')
const todayDate = document.querySelector('.today-main-city h4')
todayDate.innerHTML = format(new Date(), "MMMM dd', 'HH:mm")
const nowTemp = document.querySelector('.today-main-temp-value h1')
const feelsLike = document.querySelector('.today-main-feels')
const mainWeatherDescription = document.querySelector('.today-main-icon h3')
const mainWeatherMinMax = document.querySelector('.today-main-max-min')

async function getWeather() {
    document.body.style.cursor = 'progress'
    loaderScreen.style.display = 'block'
    try {
    const response2 = await fetch(myUrl2, {mode: 'cors'})
    const obj2 = await response2.json()

    cityName.innerHTML = obj2.name
    nowTemp.innerHTML = String(obj2.main.temp).slice(0,2)
    feelsLike.innerHTML = 'Feels like ' + String(obj2.main.feels_like).slice(0,2) + '°'
    mainWeatherDescription.innerHTML = obj2.weather[0].description
    mainWeatherMinMax.innerHTML = 'min ' + String(obj2.main.temp_min).slice(0,2) + '°' + ' - max ' + String(obj2.main.temp_max).slice(0,2) + '°'

    
    // console.log(obj2.list.map(a => a.main.temp_min))
    // console.log(obj2.list.filter(a => a.dt_txt.includes('2021-02-11')))

    console.log(obj2)
    myHtmlImage.src = myIcon + obj2.weather[0].icon + '@4x.png'
    } catch (err) {
        console.log(err)
    } finally {
        document.body.style.cursor = 'auto'
        loaderScreen.style.display = 'none'
    }
}
getWeather()

mySubmitBtn.addEventListener('click', () => {
    mySubmitBtn.disabled = true
    mySubmitBtn.style.cursor = 'progress'
    let mySubmitBtnValue = myInput.value.trim().replaceAll(/([ ]{2,})/g," ").replaceAll(/([ ])/g,"+")
    myUrl2 = 'https://api.openweathermap.org/data/2.5/weather?q=' + mySubmitBtnValue + '&units=metric&appid=' + myAPIKey
    getWeather()
    mySubmitBtn.disabled = false
    mySubmitBtn.style.cursor = 'pointer'
})

const nameCity = 'sao paulo'
const t3st2 = ' hey you i know'
const t3st3 = ' hey you      i  know'

let newT3st = nameCity.replace(/ /,"+")
let newT3st2 = t3st2.trim().replaceAll(/([ ])/g,"+")
let newT3st3 = t3st3.trim().replaceAll(/([ ]{2,})/g," ").replaceAll(/([ ])/g,"+")
console.log(newT3st)
console.log(newT3st2)
console.log(newT3st3)