//DOM MANIPULATION::


//GetElementById()
const title = document.getElementById('main-heading')
console.log(title)


//GetElementByClassName()
const movieList = document.getElementsByClassName('list-items');
console.log(movieList)


//GetElementByTagName()
const movieList1 = document.getElementsByTagName('li');
console.log(movieList1)

//querySelector()
const container = document.querySelector('div');
console.log(container)

//querySelectorAll()
const container1 = document.querySelectorAll('div'); //if html has more than 1 divs
console.log(container1)




//STYLING ELEMENTS:

const title1 = document.querySelector('#main-heading')
title1.style.color = 'green'

const listItems = document.querySelectorAll('.list-items');

for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
}

//OR 
//first converting NodeList to array:
// const listArray = Array.from(listItems) 
// listArray.map((item) => {
//     item.style.color = 'red'
// })





//CREATING ELEMENTS:
const ul = document.querySelector('ul');
const li = document.createElement('li'); //first create
ul.append(li) //second append meaning add at the last of child list




//MODIFYING THE TEXT:
li.innerText = 'Green Miles'
const firstListItem = document.querySelector('.list-items')

console.log(firstListItem.innerText) //mostly used, shows plain text
console.log(firstListItem.textContent) //shows plain text but structured as in html file
console.log(firstListItem.innerHTML) //shows both inner tags as well as text




//MODIFYING ATTRIBUTES and CLASSES:
li.setAttribute('id', 'main-heading')  //setting id or classes
li.removeAttribute('id')               //removing id or classes

const title2 = document.querySelector('#main-heading')
console.log(title.getAttribute('id'))  //getting attributes

console.log(li.classList.add('list-items')) //adding classes
console.log(li.classList.remove('list-items')) //removing classes
console.log(li.classList.contains('list-items')) //checking if classe exist: true or false



//REMOVE ELEMENTS:
li.remove();  //removing element(li)




//TRAVERSE THE DOME:

//Parent Node Traversal:
let ulist = document.querySelector('ul')
console.log(ulist.parentNode); //node include all types of node in DOM
console.log(ulist.parentElement); //element includes only nodes till html
console.log(ulist.parentNode.parentNode);
console.log(ulist.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentNode) //returns #document
console.log(html.parentElement) //returns null


//Child Node Traversal:
// console.log(ulist.childNodes)  //nodes
// console.log(ulist.firstChild)
// console.log(ulist.lastChild)

ul.childNodes[1].style.backgroundColor = 'blue';

console.log(ul.children)  //elements
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)
ul.lastElementChild.style.color = 'red'
ul.firstElementChild.style.color = 'white'



//Sibling Node Traversal:
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);























