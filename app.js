import multiply from "./multiply.js";
import { divide } from "./operations.js";

const fruits = ["Fraise", "Citron", "Ananas", "Pêche"];

/* fruits.forEach((fruit) => {
  container.innerHTML += `<article class="item">
    <img
      src="https://img.cuisineaz.com/660x660/2015/01/29/i113699-photo-de-crepe-facile.jpeg"
    />
    <div class="item-content">
      <h2>${fruit}</h2>
      <p>Une super recette de crêpes</p>
    </div>
  </article>`;
}); */

//On va chercher la donnée sur l'url
fetch("https://fakestoreapi.com/products")
  .then((res) => {
    //On récupère la donnée json renvoyée par fakestoreapi
    return res.json();
  })
  .then((json) => {
    //On vient ajouter des <articles></articles> pour chaque élément renvoyé par fakestoreapi
    const container = document.querySelector(".container");
    container.innerHTML = json
      .map((article) => {
        return `<article class="item">
      <img
        src="${article.image}"
      />
      <div class="item-content">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
      </div>
    </article>`;
      })
      .join("");

    /* On récupère tous les <article></article> de la page sous forme de tableau */
    const articles = document.querySelectorAll("article");
    console.log(articles);

    /* Pour chaque <article></article> dans notre tableau,
on vient gérer l'évenement "click" avec la fonction handleClick */
    articles.forEach((article) => {
      article.onclick = handleClick;
    });
  })
  .catch((error) => {
    //en cas d'erreur sur la requête ou dans notre code
    const container = document.querySelector(".container");
    container.innerHTML = "<p>Une erreur s'est produite</p>";
    console.error(error);
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

fetch(
  "https://img.cuisineaz.com/660x660/2015/01/29/i113699-photo-de-crepe-facile.jpeg"
)
  .then((response) => {
    console.log(response);
    return response.blob();
  })
  .then((blob) => {
    console.log(blob);
    const url = URL.createObjectURL(blob);
    const imgs = document.querySelectorAll("article img");
    imgs.forEach((img) => {
      img.src = url;
    });
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
