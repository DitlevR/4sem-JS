const getSecureRandoms = require("./ex1-crypto-module");

/*
//1 Wrap a callback implementation in a promise based implementation
d) Create a new file and test the module, like so:
First, using plain promises
*/

getSecureRandoms().then((d) => console.log(d));

//Await/async

const SixRandoms = async () => {
  const randoms = await getSecureRandoms();
  randoms.forEach((element) => {
    console.log("async/await:", element);
  });
};
SixRandoms();
