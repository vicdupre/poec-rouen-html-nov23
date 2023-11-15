import multiply from "./multiply.js";
import { divide } from "./operations.js";

const fruits = ["Fraise", "Citron", "Ananas", "Pêche"];

const container = document.querySelector(".container");

fruits.forEach((fruit) => {
  container.innerHTML += `<article class="item">
    <img
      src="https://img.cuisineaz.com/660x660/2015/01/29/i113699-photo-de-crepe-facile.jpeg"
    />
    <div class="item-content">
      <h2>${fruit}</h2>
      <p>Une super recette de crêpes</p>
    </div>
  </article>`;
});

/* on reçoit en paramètre l'évenement click */
const handleClick = (event) => {
  console.log(event);
  /* event.currentTarget est l'élément HTML qui a perçu le clic 
  (notre <article></article>) */
  console.log(event.currentTarget);
  /* Sur cet article, on vient sélectionner le <h2></h2> */
  const title = event.currentTarget.querySelector("h2");
  try {
    console.log(title);
  } catch (error) {
    console.error(error.name, error.message);
  }

  //title.style.color = "red";
  /*On affiche le contenu HTML de notre <h2></h2>,
   soit le titre de la recette */
  alert(title.innerHTML);
};

/* On récupère tous les <article></article> de la page sous forme de tableau */
const articles = document.querySelectorAll("article");
console.log(articles);

/* Pour chaque <article></article> dans notre tableau,
on vient gérer l'évenement "click" avec la fonction handleClick */
articles.forEach((article) => {
  article.onclick = handleClick;
});

new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      //tout s'est bien passé, on renvoie la donnée dans resolve ->bloc then
      resolve("Terminé");
    }, 1000);
  } catch (error) {
    //On a eu un problème, on renvoie l'erreur dans reject -> bloc catch
    reject(error);
  }
})
  //en cas de succès
  .then((value) => {
    console.log(value);
  })
  //en cas d'erreur
  .catch((err) => console.log(err));

console.log(multiply(2, 5));
//console.log(add(2, 5));
console.log(divide(2, 5));
