const todoList = document.querySelector(".todo_list");
const todoItem = document.querySelector(".todo_item");
const todoInput = document.querySelector(".todo_input");

let todos = [];
let id = 0;

// input 입력에 대한 이벤트 처리
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

    // 체크 버튼
    const checkBtnElem = document.createElement("div");
    checkBtnElem.classList.add("button");
    checkBtnElem.classList.add("btn_check");

    // 일정 내용
    const todoTextElem = document.createElement("p");
    todoTextElem.classList.add("todo_text");
    todoTextElem.innerHTML = todo.content;

    // 수정 버튼
    const updateBtnElem = document.createElement("div");
    updateBtnElem.classList.add("btn_update");
    updateBtnElem.innerText = "수정";

    // 삭제 버튼
    const delBtnElem = document.createElement("div");
    delBtnElem.classList.add("btn_delete");
    delBtnElem.innerText = "삭제";

    todoItemElem.appendChild(checkBtnElem);
    todoItemElem.appendChild(todoTextElem);
    todoItemElem.appendChild(updateBtnElem);
    todoItemElem.appendChild(delBtnElem);

    todoList.appendChild(todoItemElem);

    todoInput.value = "";

    // 일정 삭제
    delBtnElem.addEventListener("click", (e) => {
      const target = e.target.parentNode;
      todoList.removeChild(target);
      console.log(e.target.parentNode);
    });

    // 일정 완료
    // checkBtnElem.addEventListener("click", (e) => {
    //   todos.map((todo) =>
    //     todo.id !== e.target.id ? { ...todo, complete: !todo.complete } : todo
    //   );
    //   console.log(e.target.value);
    //   console.log(todos);
    // });
  });
}
