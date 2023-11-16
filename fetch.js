fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
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
  })
  .catch((error) => {
    //en cas d'erreur sur la requête ou dans notre code
    const container = document.querySelector(".container");
    container.innerHTML = "<p>Une erreur s'est produite</p>";
    console.error(error);
  });

const init = {
  method: "POST",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
};

console.log(init.body);
fetch("https://fakestoreapi.com/products", init)
  .then((res) => res.json())
  .then((json) => console.log(json));
