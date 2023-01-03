const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "LNDo9QvstZka0dkc6qikeA==KydCSEo7C1TaQ0Jz";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Loading..";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
