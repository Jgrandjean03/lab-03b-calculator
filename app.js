//imports all the math functions from MathUtils.js
    import {add, minus, multi, div} from './MathUtils.js';


//ADDITION
            const myaddButton = document.getElementById('add-button')
                
            myaddButton.addEventListener('click', () => {
            //user input from website
                const number1 = document.getElementById('add1') 
                const number2 = document.getElementById('add2')
                const resultSpan = document.getElementById('addresult')

            //defines user inputs as local variables to be used in function
                const num1 = Number(number1.value);
                const num2 = Number(number2.value);
                const total = add(num1,num2)

            //prints result to addresult
                resultSpan.textContent = total
            })


//SUBTRACTION
            const myminusButton = document.getElementById('minus-button')

            myminusButton.addEventListener('click', () => {
            //user input from website
                const number1 = document.getElementById('minus1') 
                const number2 = document.getElementById('minus2')
                const resultSpan = document.getElementById('minusresult')

            //defines user inputs as local variables to be used in function
                const num1 = Number(number1.value);
                const num2 = Number(number2.value);
                const total = minus(num1,num2)

            //prints result to minusresult
                resultSpan.textContent = total
            })


///MULTIPLY
            const mymultiButton = document.getElementById('multi-button')

            mymultiButton.addEventListener('click', () => {
            //user input from website
                const number1 = document.getElementById('multi1') 
                const number2 = document.getElementById('multi2')
                const resultSpan = document.getElementById('multiresult')

            //defines user inputs as local variables to be used in function
                const num1 = Number(number1.value);
                const num2 = Number(number2.value);
                const total = multi(num1,num2)

            //prints result to multiresult
                resultSpan.textContent = total
            })

        
//DIVIDE            
            const mydivButton = document.getElementById('div-button')

            mydivButton.addEventListener('click', () => {
            //user input from website
                const number1 = document.getElementById('div1') 
                const number2 = document.getElementById('div2')
                const resultSpan = document.getElementById('divresult')

            //defines user inputs as local variables to be used in function
                const num1 = Number(number1.value);
                const num2 = Number(number2.value);
                const total = div(num1,num2)

            //prints result to divresult
                resultSpan.textContent = total
            })