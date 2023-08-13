// Event Listeners

//element.addEventListner("click", function);


//click
const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love JS');
}
buttonTwo.addEventListener("click", alertBtn);

//mouseover and mouseout
const newBackgroundColor = document.querySelector('.box-3')

function backgroundChange() {
    newBackgroundColor.style.backgroundColor = "orange"
}
function revertBackground() {
    newBackgroundColor.style.backgroundColor = "";
}
newBackgroundColor.addEventListener("mouseover", backgroundChange)
newBackgroundColor.addEventListener("mouseout", revertBackground)


//hiding and revealing
const revealbtn = document.querySelector('.reveal-btn')
const hiddenContent = document.querySelector('.hidden-content')

function reveal() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }


}

revealbtn.addEventListener("click", reveal)


//note: working but properly not working as wanted!!!