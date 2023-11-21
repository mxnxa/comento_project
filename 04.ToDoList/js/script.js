// 일정 추가
// 일정 삭제

const todoList = document.querySelector(".todo_list");
const todoItem = document.querySelector(".todo_item");
const todoInput = document.querySelector(".todo_input");

const todos = [
  { id: 1, content: "할 일1" },
  { id: 2, content: "할 일2" },
  { id: 3, content: "할 일3" },
];

// create
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    paintTodos();
  }
});

// 일정 출력
function paintTodos() {
  const inputValue = todoInput.value;

  if (inputValue === "") {
    alert("일정을 입력하세요.");
    todoInput.focus();
    return false;
  }

  todos.push(inputValue);

  todoInput.value = "";
  console.log(todos);
}

// function appendTodos() {
//   todos.concat({
//     id: todos[todos.length - 1].id + 1,
//     content: todoInput.value,
//   });
// }

// update

// delete
