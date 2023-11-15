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
