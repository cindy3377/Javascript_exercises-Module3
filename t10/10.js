/*
Open t10 folder in your IDE/editor. Read the first name and last name values from the form and print them in the <p id="target"> (2p)
remember to stop the default action of the form
you can use attribute selectors in querySelector() to select the <input> elements
example output: Your name is Luke Skywalker
 */

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", submitForm, false);

function getFormValue()
{
  let x = document.getElementById("source");
  let firstName = x.elements[0].value;
  let lastName = x.elements[1].value;
  return {firstName, lastName};
}
function submitForm (event) {
    event.preventDefault();
    let {firstName, lastName} = getFormValue();
    let p = document.getElementById('target');
    p.innerHTML = `Your name is ${firstName} ${lastName}`
}
