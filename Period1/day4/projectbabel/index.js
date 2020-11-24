import "core-js/proposals/promise-any.js";
import "node-fetch";

const URL = "https://swapi.dev/api/people/";

async function fetchpeople() {
  const person1 = fetchPerson(URL + "1");
  const person2 = fetchPerson(URL + "2");
  const res = await Promise.all([person1, person2]);
  //console.log(res[0].name);
  console.log("done");
}

function fetchPerson(url) {
  try {
    return fetch(url).then((res) => res.json());
  } catch (err) {
    console.log("error");
  }
}

fetchpeople();
