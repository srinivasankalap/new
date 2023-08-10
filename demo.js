let list=document.querySelector('#items')
console.log(list.parentElement)
list.parentElement.style.backgroundColor='#ccc'


console.log(list.children)

console.log(list.firstElementChild)
list.firstElementChild.textContent='Hello Buddy'

console.log(list.lastElementChild)
list.lastElementChild.textContent="Fool"

console.log(list.previousElementSibling)
list.previousElementSibling.style.color='yellow'


let newdiv=document.createElement('div')
newdiv.className='new'
newdiv.id='newdiv'
newdiv.setAttribute('title','Hello world')
console.log(newdiv)

let value=document.createTextNode('Hello World')
newdiv.appendChild(value)
console.log(newdiv)


let container=document.querySelector('header .container');
let x=document.querySelector('header h1')

container.insertBefore(newdiv,x)