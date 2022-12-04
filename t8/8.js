/*
Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
There are two input fields where user enters numbers. Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
Show the result in <p id="result"> when the button is clicked.
 */
function calculate() {
    let valueInput1 = parseInt(document.getElementById('num1').value)
    let valueInput2 = parseInt(document.getElementById('num2').value)
    let selectedOption = document.getElementById('operation').value
    if(selectedOption == 'add') return valueInput1 + valueInput2
    else if (selectedOption == 'sub') return valueInput1 - valueInput2
    else if (selectedOption == 'multi') return valueInput1 * valueInput2
    else return valueInput1 / valueInput2
}

function onClickCalculate() {
    let calculatedValue = calculate()
    let result = document.getElementById('result')
    result.innerHTML = calculatedValue
}