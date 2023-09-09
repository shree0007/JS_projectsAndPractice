
const content = document.getElementsByClassName('content-container');

for (i = 0; i < content.length; i++) {
    content[i].addEventListener("click", function () {
        this.classList.toggle('active') //toggle is used to add or remove class name(active) in style.css
    })
}