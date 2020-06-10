const myButton = document.getElementById('equals-button')

myButton.addEventListener('click', () => {
let number1 = document.getElementById('num1') 
let number2 = document.getElementById('num2')
const resultSpan = document.getElementById('result')

resultSpan.textContent = (Number(number1.value) + Number(number2.value))
 
})


