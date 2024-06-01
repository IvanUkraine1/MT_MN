let addMessage = document.querySelector(".message");
let addButton = document.querySelector(".add");
let todo = document.querySelector(".toDo");
let todoList = [];
let deleteButton = document.querySelector(".delete");
addButton.addEventListener('click', function(){
    let newToDo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };
    todoList.push(newToDo);
    displayMessages();
});
deleteButton.addEventListener('click', function() {
    todoList = todoList.filter(item => !item.checked);
    displayMessages();
});
function displayMessages(){
    let displayMessage = '';
    todoList.forEach(function(item, i){
        displayMessage += `
        <li>
            <div class="dodo">
            <input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
            <label for='item_${i}'>${item.todo}</label>
            </div>
            <hr>
        </li>`;
    });
    todo.innerHTML = displayMessage;
}
todo.addEventListener('change', function(event){
    let id = event.target.getAttribute("id").split('_')[1];
    let valueLabel = todo.querySelector('[for=' + event.target.getAttribute("id") + ']').innerHTML;
    if (todoList[id].todo === valueLabel) {
        todoList[id].checked = !todoList[id].checked;
        displayMessages();
    }
});

