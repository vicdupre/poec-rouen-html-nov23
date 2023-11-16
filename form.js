const form = document.querySelector("form");

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

  //On enregistre dans le stockage du navigateur nos informations sous forme de chaine de caractères
  localStorage.setItem("user", JSON.stringify(data));
};
