const form = document.querySelector("form");

const username = document.querySelector("p");

const _name = sessionStorage.getItem("user");
username.innerHTML = _name;

form.onsubmit = function (event) {
  //On bloque le comportement naturel du navigateur
  event.preventDefault();
  console.log("Formulaire envoyé");
  console.log(form);
  //On récupère les valeurs du formulaire
  const formData = new FormData(form);
  //On transforme le formData en objet plus facilement utilisable
  const data = Object.fromEntries(formData);
  // output as an object
  console.log(data);

  username.innerHTML = data.email;

  //le sessionStorage sera vidée à la fermeture du navigateur
  sessionStorage.setItem("user", data.email);

  //On enregistre dans le stockage du navigateur nos informations sous forme de chaine de caractères
  //Le localstorage ne sera pas vidé automatiquement
  localStorage.setItem("user", JSON.stringify(data));
};

const resetBtn = document.querySelector("button.btn-danger");
resetBtn.onclick = () => {
  sessionStorage.removeItem("user");
  localStorage.clear();
};
