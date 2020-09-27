//a) First implement this functionality without promises, using just the method  randomBytes(..).

const crypto = require("crypto");
let size = 48;
require("crypto").randomBytes(size, function (err, buffer) {
  let secureHex = buffer.toString("hex");
  console.log(secureHex);
});
var SIZE = 0;
const obj = {
  title: "Secure randoms",
  randoms: [],
};

crypto.randomBytes(SIZE, (err, buffer) => {
  obj.randoms.push({ length: 48, random: buffer.toString("hex") });
  crypto.randomBytes(SIZE, (err, buffer) => {
    obj.randoms.push({ length: 40, random: buffer.toString("hex") });
    crypto.randomBytes(SIZE, (err, buffer) => {
      obj.randoms.push({ length: 32, random: buffer.toString("hex") });
      console.log(obj);
    });
  });
});

//b) Use Promises to solve the problem.
//Create a function makeSecureRandom(size) that returns a promise,
//using the callback based design,provided by the randomBytes(..) method.

const makeSecureRandom = (size) =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (err, buffer) {
      if (err) return reject(err);
      return resolve({ length: size, random: buffer.toString("hex") });
    });
  });

module.exports = makeSixRandoms;
async function makeSixRandoms() {
  const p1 = makeSecureRandom(48);
  const p2 = makeSecureRandom(40);
  const p3 = makeSecureRandom(32);
  return await Promise.all([p1, p2, p3);
}
