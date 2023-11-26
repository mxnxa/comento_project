const todoList = document.querySelector(".todo_list");
const todoItem = document.querySelector(".todo_item");
const todoInput = document.querySelector(".todo_input");

// 일정 목록을 담을 배열
let todos = [];
let id = 0;

// input 입력에 대한 이벤트 처리
function submit() {
  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      // 일정을 입력하지 않고 enter키를 누를경우 경고창 띄움
      if (todoInput.value === "") {
        alert("일정을 입력하세요.");
        todoInput.focus();
        return;
      }

      appendTodos(e.target.value);
      todoInput.value = "";
      console.log(todos);
    }
  });
}
submit();

// 일정 추가
function appendTodos(text) {
  const currentId = id++;
  todos = todos.concat({
    id: currentId,
    content: text,
    complete: false,
  });
  //   todos = [...todos, { id: id++, content: todoInput.value, complete: false }];
  //   todos = newTodos;
  paintTodos();
}

// 일정 출력
function paintTodos() {
  // todo_list 내용 초기화
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItemElem = document.createElement("li");
    todoItemElem.classList.add("todo_item");

    // 체크 버튼
    const checkBtnElem = document.createElement("div");
    checkBtnElem.classList.add("button");
    checkBtnElem.classList.add("btn_check");

    if (todo.complete) {
      const innerCircle = document.createElement("div");
      todoItemElem.classList.add("complete");
      innerCircle.classList.add("inner_circle");
      checkBtnElem.appendChild(innerCircle);
    }

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

    // 삭제 버튼 이벤트
    delBtnElem.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    // 완료 표시 버튼 이벤트
    checkBtnElem.addEventListener("click", () => {
      completeTodo(todo.id);
      console.log(todo.id);
      console.log(todo.complete);
      //   completeTodo(todo, todoItemElem, checkBtnElem);
    });
  });
}

// 일정 삭제
function deleteTodo(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  paintTodos();
}

// 일정 완료
function completeTodo(todoId) {
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
  );

  paintTodos();
}
