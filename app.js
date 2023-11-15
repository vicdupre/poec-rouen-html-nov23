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
  console.log(title);
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
