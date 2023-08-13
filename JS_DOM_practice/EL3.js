// Event Delegation
// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.
// instead of adding events to all the li items we can achieve the same result by adding event to parent ul element which is known as event delegation. creates bubbling effect.


document.querySelector('#sports').addEventListener("click", function (e) {
    console.log(e.target.getAttribute('id') + ' is clicked')
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = "gray";
    }
})


const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');
sports.appendChild(newSport);







/* From tutorial: longer way
document.querySelector('#football').addEventListener("click", function (e) {
    console.log('Football is clicked');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'gray'
    }
})

document.querySelector('#basketball').addEventListener("click", function (e) {
    console.log('Basketball is clicked');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'gray'
    }
})

document.querySelector('#boxing').addEventListener("click", function (e) {
    console.log('Boxing is clicked');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'gray'
    }
})



document.querySelector('#tennis').addEventListener("click", function (e) {
    console.log('Tennis is clicked');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'gray'
    }
})

document.querySelector('#golf').addEventListener("click", function (e) {
    console.log('golf is clicked');
    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'gray'
    }
})

*/



/* my  way of doing: longer way

const football = document.querySelector('#football')
const basketball = document.querySelector('#basketball')
const boxing = document.querySelector('#boxing')
const tennis = document.querySelector('#tennis')
const golf = document.querySelector('#golf')


football.addEventListener("click", function () {
    console.log(`${football.innerText} clicked`);
    football.style.backgroundColor = 'gray';
})

basketball.addEventListener("click", function () {
    console.log(`${basketball.innerText} clicked`);
    basketball.style.backgroundColor = 'gray';
})

boxing.addEventListener("click", function () {
    console.log(`${boxing.innerText} clicked`);
    boxing.style.backgroundColor = 'gray';
})

tennis.addEventListener("click", function () {
    console.log(`${tennis.innerText} clicked`);
    tennis.style.backgroundColor = 'gray';
})

golf.addEventListener("click", function () {
    console.log(`${golf.innerText} clicked`);
    golf.style.backgroundColor = 'gray';
})

*/