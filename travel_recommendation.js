async function search() {
  fetch("travel_recommendation_api.json")
    .then((response) => response.json())
    .then(console.log);
}
