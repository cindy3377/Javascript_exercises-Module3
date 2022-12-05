/*
Open t9 folder in your IDE/editor. This is continuation to previous task. There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
You can use the includes and split methods.
eval() function is prohibited
No need to support decimal numbers, calculating integers is enough.
Example inputs: 3+5, 2-78, 3/6, etc..
 */
function calculate () {
    let fieldValue = document.getElementById('calculation').value
    let result = 0
    if(fieldValue.indexOf('+') > -1){
        const {num1, num2} = split('+', fieldValue)
        result = num1 + num2
    }
    else if (fieldValue.indexOf('-') > -1) {
        const {num1, num2} = split('-', fieldValue)
        result = num1 - num2
    }
    else if (fieldValue.indexOf('*') > -1) {
        const {num1, num2} = split('*', fieldValue)
        result = num1 * num2
    }
    else if (fieldValue.indexOf('/') > -1) {
        const {num1, num2} = split('/', fieldValue)
        result = num1 / num2
    }
    else {
        result = 'error, wrong input'
    }
    const elementResult = document.getElementById('result')
    elementResult.innerHTML = result
}

function split (indicator, str) {
    let numbers = str.split(indicator)
    let num1 = parseInt(numbers[0])
    let num2 = parseInt(numbers[1])
    return {num1, num2}
}