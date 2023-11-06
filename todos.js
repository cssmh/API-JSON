function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => UsingTodos(data));
}
getTodos();

function UsingTodos(todos) {
  const getFather = document.getElementById("todos-container");
  for (let todo of todos) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
     <h3>id: ${todo.id}</h3>
     <p>Title: ${todo.title}</p>
     <p>Completed?: ${todo.completed === true? 'completed yes true' : "not completed man"}</p>
    `;
    getFather.appendChild(newDiv)
  }
}
