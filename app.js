const form = document.querySelector("form");
const list = document.querySelector("ul");

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  // { title : "Faire les courses" }

  list.innerHTML += `<li>${data.title}</li>`; //list.innerHTML += "<li>" + data.title + "</li>"

  //Crée un tableau
  let todolist = [];

  //Je récupère les éléments du local storage
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos) {
    todolist = JSON.parse(savedTodos);
  }
  //J'ajoute le nouveau todo à mon tableau
  todolist.push(data);

  //Je sauvegarde mon nouveau tableau dans le localstorage
  localStorage.setItem("todos", JSON.stringify(todolist));
};

//Affichage de base
const initialTodos = localStorage.getItem("todos");
if (initialTodos) {
  const todos = JSON.parse(initialTodos);
  todos.forEach((todo) => {
    list.innerHTML += `<li>${todo.title}</li>`;
  });
}
