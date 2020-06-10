const myaddButton = document.getElementById('add-button')

myaddButton.addEventListener('click', () => {
let number1 = document.getElementById('add1') 
let number2 = document.getElementById('add2')
const resultSpan = document.getElementById('addresult')

resultSpan.textContent = (Number(add1.value) + Number(add2.value))
})


const myminusButton = document.getElementById('minus-button')

myminusButton.addEventListener('click', () => {
let number3 = document.getElementById('minus1') 
let number4 = document.getElementById('minus2')
const resultSpan = document.getElementById('minusresult')

resultSpan.textContent = (Number(minus1.value) - Number(minus2.value))
})

const mymultiButton = document.getElementById('multi-button')

mymultiButton.addEventListener('click', () => {
let number5 = document.getElementById('multi1') 
let number6 = document.getElementById('multi2')
const resultSpan = document.getElementById('multiresult')

resultSpan.textContent = (Number(multi1.value) * Number(multi2.value))
})

const mydivButton = document.getElementById('div-button')

mydivButton.addEventListener('click', () => {
let number7 = document.getElementById('div1') 
let number8 = document.getElementById('div2')
const resultSpan = document.getElementById('divresult')

resultSpan.textContent = (Number(div1.value) / Number(div2.value))
})