const fetch = require("node-fetch");
var now = require("performance-now");

const URL = "https://swapi.dev/api/people/";

/*Use fetch and async/await to complete fetchPerson(..)below. When implemented,
each line in printNames() must be executed “sequentially”. Verify this with the debugger */

function fetchPerson(url) {
  try {
    return fetch(url).then((res) => res.json());
  } catch (err) {
    console.log("error");
  }
}

async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URL + "1");
  const person2 = await fetchPerson(URL + "2");
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");
}

//printNames();

/*Measure the time spent the same way as above,
to convince yourself that; knowing how and when to perform request in serial or parallel is important.*/

async function printNamesInParallel() {
  var start = now();
  console.log("Before");
  const person1 = fetchPerson(URL + "1");
  const person2 = fetchPerson(URL + "2");
  const res = await Promise.all([person1, person2]);
  console.log(res[0].name);
  console.log(res[1].name);
  console.log("After all");
  var end = now();
  console.log(start.toFixed(3));
  console.log((start - end).toFixed(3));
}

printNamesInParallel();
