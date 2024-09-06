document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const results = await search(formData.get("query"));

  const cards = results.map(({ name, imageUrl, description }) => {
    return `
    <div class="card mb-3">
      <img src="./images/places/${imageUrl}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
          ${description}
        </p>
        <a href="#" class="btn btn-primary">Visit</a>
      </div>
    </div>
      `;
  });
  document.getElementById("cards").innerHTML = cards.join("");
});

const keywords = {
  beach: "beaches",
  beaches: "beaches",
  temple: "temples",
  temples: "temples",
  country: "countries",
  countries: "countries",
};

async function search(query) {
  const keyword = keywords[query.toLowerCase()];
  if (!keyword) return [];

  const data = await fetch("travel_recommendation_api.json").then((response) =>
    response.json()
  );

  return data[keyword];
}
