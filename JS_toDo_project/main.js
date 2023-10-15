//variables
const inputTask = document.getElementById('input-task');
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');

const mainContainer = document.querySelector('.container');


//Event Listener for Add Button

addTask.addEventListener("click", function () {
    let task = document.createElement('div');  //creating div
    task.classList.add('task');                // giving class 'task' to created div for css


    let li = document.createElement('li');  //creating li
    li.innerText = inputTask.value          //giving innerText to li
    task.appendChild(li);                   // adding li to above created div


    let checkButton = document.createElement('button');      //creating button
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'; //innerHTML of button
    checkButton.classList.add('checkTask'); //checkTask as class name for button
    task.appendChild(checkButton);          //adding this button to above created div


    let deleteButton = document.createElement('button');  //creating another button
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; //innerHTML of button
    deleteButton.classList.add('deleteTask'); // class name of this button as deleteTask
    task.appendChild(deleteButton);  //adding this button to above created div


    if (inputTask.value === "") {          //if input value is empty, alert string
        alert('Please Enter Task');
    } else {
        taskContainer.appendChild(task);   // else add above created div(that contains li, checkTask button, deleteTask button) to the div 'task-container' which is in html
    }

    inputTask.value = '';   //when the task is added the input value goes to default mode i.e empty

    checkButton.addEventListener('click', () => {
        li.style.textDecoration = 'line-through';

        //OR

        // checkButton.previousSibling.style.textDecoration = 'line-through';  it targets li's TEXT
        // checkButton.parentElement.style.textDecoration = 'line-through';  it targets div's TEXT

    })

    deleteButton.addEventListener('click', (e) => {

        deleteButton.parentElement.remove();  //parentElement= div 'task'


        // OR

        // task.remove();

        // e.target.parentElement.parentElement.remove(); 
        // => e.target is where we click, so need to be careful where we click since there is icon inside button. Based on this code, if we click icon it will remove 'task' div as it is parentelement.parentelement. But if we click button outside icon, then it will remove 'taskContainer' div, since the parentelement.parentelement of button is taskcontainer div. so need to be careful!!

        // task.style.display = 'none';           
        // => task=div
    })



})









//TRY USING CLEAR BUTTON: NOT WORKING PROPERLY. NEED TO DO IT AGAIN


addTask.addEventListener('click', function () {

    let clearDiv = document.createElement('div');
    clearDiv.classList.add('clear-div');
    clearDiv.innerHTML = '<button id="clear-btn">Clear all</button>';
    mainContainer.appendChild(clearDiv);


    clearDiv.addEventListener('click', () => {
        taskContainer.remove();
        clearDiv.remove();
        location.reload();

    })


}, { once: true })








