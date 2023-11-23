const todoList = document.querySelector(".todo_list");
const todoItem = document.querySelector(".todo_item");
const todoInput = document.querySelector(".todo_input");

let todos = [];
let id = 0;

// create
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (!todoInput.value) {
      alert("일정을 입력하세요.");
      todoInput.focus();
      return;
    }

    appendTodos(e.target.value);
    todoInput.value = "";
    console.log(todos);
  }
});

// 일정 추가
function appendTodos(text) {
  const newTodos = todos.concat({ id: id++, content: text, complete: false });
  //   todos = [...todos, { id: id++, content: todoInput.value, complete: false }];
  todos = newTodos;
  paintTodos();
}

// 일정 출력
function paintTodos() {
  todoInput.innerHTML = "";

  todos.forEach(function (todo) {
    const todoItemElem = document.createElement("li");
    todoItemElem.classList.add("todo_item");

    const checkBtnElem = document.createElement("div");
    checkBtnElem.classList.add("button");
    checkBtnElem.classList.add("btn_check");

    const todoTextElem = document.createElement("p");
    todoTextElem.classList.add("todo_text");
    todoTextElem.innerHTML = todo.content;

    const updateBtnElem = document.createElement("div");
    updateBtnElem.classList.add("btn_update");
    updateBtnElem.innerText = "수정";

    const delBtnElem = document.createElement("div");
    delBtnElem.classList.add("btn_delete");
    delBtnElem.innerText = "삭제";

    todoItemElem.appendChild(checkBtnElem);
    todoItemElem.appendChild(todoTextElem);
    todoItemElem.appendChild(updateBtnElem);
    todoItemElem.appendChild(delBtnElem);

    todoList.appendChild(todoItemElem);

    todoInput.value = "";

    delBtnElem.addEventListener("click", (e) => {
      const target = e.target.parentNode;
      todoList.removeChild(target);
    });
  });
}

// delBtnElem.addEventListener("click", (e) => {
//     todos.filter((todo) => todo.id !== e.target.id);
//     //   paintTodos();
//     console.log(e.target.id);
//     console.log(todos);
//   });

// 일정 수정
// function updateTodo() {
//     updateBtnElem.addEventListener("click", e =>

//     )
// }

// 일정 삭제
