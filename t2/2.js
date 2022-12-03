/*Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
Add the following HTML code to the element with id="target"
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
Add class my-item to the second list item
 */
const ul = document.getElementById('target')
const firstList = document.createElement('li')
firstList.innerHTML = 'First item'
ul.appendChild(firstList)

const secondList = document.createElement('li')
secondList.innerHTML = 'Second item'
secondList.classList.add('my-item')
ul.appendChild(secondList)

const thirdList = document.createElement('li')
thirdList.innerHTML = 'Third item'
ul.appendChild(thirdList)

