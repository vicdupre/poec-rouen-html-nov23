console.log("Bonjour");

const btn = document.querySelector("button");

const handleClick = (event) => {
  event.target.innerHTML = "Chargement...";
  setTimeout(function () {
    event.target.innerHTML = "Connexion";
  }, 1500);
};

btn.addEventListener("click", handleClick);

/* btn.onclick = (event) => {
  console.log(event);
  btn.innerHTML = "Chargement...";
  setTimeout(function () {
    btn.innerHTML = "Connexion";
  }, 1500);
}; */
