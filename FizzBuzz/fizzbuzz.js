function fizzBuzz() {
    let answer = document.getElementById('txtnum')
    let $div = document.getElementById('output')

    $div.innerHTML = ''
    for (let i = 1; i <= Number(answer.value); i ++) {
        let item = document.createElement('h2')
        $div.appendChild(item)
        if (i % 3 === 0 && i % 5 === 0) {
            let t = document.createTextNode("FizzBuzz")
            item.appendChild(t)
        } else if (i % 3 === 0){
            let t = document.createTextNode("Fizz")
            item.appendChild(t)
        } else if (i % 5 === 0){
            let t = document.createTextNode("Buzz")
            item.appendChild(t)
        } else {
            let t = document.createTextNode(i)
            item.appendChild(t)
        }
    }
}
