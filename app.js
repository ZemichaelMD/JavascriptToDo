//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo')



//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOptions.addEventListener('click', filterTodo)

//Functions
function addTodo(event) {
    //prevent form from submiting
    event.preventDefault();

    //TOdo DIv
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //create Mark Button
    const completedButton = document.createElement('button')
    completedButton.innerText = "Done"
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    //create Trush Butotn
    const trashButton = document.createElement('button');
    trashButton.innerText = "Del"
    trashButton.classList.add('delete-btn')
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear todoInput value
    todoInput.value = ""
}
//Delete Item
function deleteCheck(e) {
    const item = e.target;
    //Delete Item
    if (item.classList[0] == 'delete-btn') {
        const todo = item.parentElement;
        //annimation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })

    }
    if (item.classList[0] == "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display= "flex";
                }
                else{
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display ="none";
                }
                break;
        }

    });
}

function saveLocalTodo(todo){

}