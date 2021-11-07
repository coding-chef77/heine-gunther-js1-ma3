const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=26d5263dc49d42859d65231b99582553";

const resultContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const facts = results.results;

    resultContainer.innerHTML = "";
    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }

      resultContainer.innerHTML += ` <div class="results"><<ul><li><div>Name:</div>${facts[i].name}</li><div>Rating:</div><li>${facts[i].rating}</li><div>Tags:</div><li>${facts[i].tags.length}</li></ul></div>`;
    }
  } catch (error) {
    resultContainer.innerHTML = "Something went Wrong!";
  }
}

makeApiCall();
