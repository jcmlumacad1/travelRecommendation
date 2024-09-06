document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log("search(formData)", await search(formData.get("query")));
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
