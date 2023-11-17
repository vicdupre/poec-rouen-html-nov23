import listItem from "./listItem.js";

const form = document.querySelector("form");
const list = document.querySelector("ul");
const emptyButton = document.querySelector("#emptyList");
const emptyCompleted = document.querySelector("#emptyCompleted");

//Crée un tableau
let todolist = [];

form.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  // { title : "Faire les courses" }
  data.id = Date.now().toString();

  if (data.urgent) {
    list.innerHTML = listItem(data, data.id) + list.innerHTML;
    //J'ajoute le nouveau todo au début mon tableau
    todolist.unshift(data);
  } else {
    list.innerHTML += listItem(data, data.id);
    //list.innerHTML = list.innerHTML +  "<li>" + data.title + "</li>"
    //J'ajoute le nouveau todo à mon tableau
    todolist.push(data);
  }
  console.log(todolist);
  //Je sauvegarde mon nouveau tableau dans le localstorage
  localStorage.setItem("todos", JSON.stringify(todolist));
  form.reset();
};

//Affichage de base
const initialTodos = localStorage.getItem("todos");
if (initialTodos) {
  const todos = JSON.parse(initialTodos);
  todolist = todos;
  todos.forEach((todo) => {
    list.innerHTML += listItem(todo, todo.id);
  });

  const deleteButtons = list.querySelectorAll("button");

  const handleDelete = (event) => {
    const id = event.target.value;
    todolist = todolist.filter((todo) => todo.id != id);

    list.innerHTML = "";
    todolist.forEach((todo) => {
      list.innerHTML += listItem(todo, todo.id);
    });
    localStorage.setItem("todos", JSON.stringify(todolist));
  };

  deleteButtons.forEach((button) => {
    button.onclick = handleDelete;
  });
}

emptyButton.onclick = () => {
  todolist = [];
  localStorage.removeItem("todos");
  list.innerHTML = "";
};

emptyCompleted.onclick = () => {
  //On sélectionne tous les inputs de type checkbox qui sont cochés
  const checked = list.querySelectorAll("input[type='checkbox']:checked");
  console.log(checked);
  const ids = [];

  //On récupère les identifiants correspondant aux todos terminés
  checked.forEach((checkbox) => ids.push(checkbox.value));
  console.log(ids);

  //On retire les todos terminés de la liste en filtrant par rapport à l'id
  todolist = todolist.filter((todo) => !ids.includes(todo.id));

  //On met à jour l'interface
  list.innerHTML = "";
  todolist.forEach((todo) => {
    list.innerHTML += listItem(todo, todo.id);
  });
  localStorage.setItem("todos", JSON.stringify(todolist));
};
