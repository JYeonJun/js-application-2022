const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // {id:, text:} save
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();    // 화면상 list 목록 제거
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));    // DB상 list 목록 제거
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);   // ul > li
    li.id = newTodo.id; // li 요소에 랜덤 id 부여
    li.appendChild(span);   // li > span
    li.appendChild(button); // lis > button
    span.innerText = newTodo.text;
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {    // toDos 배열에 저장할 객체
        text: newTodo,
        id: Date.now()  // 랜덤 id 
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}