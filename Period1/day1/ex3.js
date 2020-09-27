//3.
var names = ["Lars", "Peter", "Jan", "Bo"];
const numbers = [1, 4, 9, 16];

Array.prototype.myFilter = function (callback) {
  let newArray = [];
  this.forEach((element) => {
    if (callback(element)) newArray.push(element);
  });
  return newArray;
};

Array.prototype.myMap = function (callback) {
  let newArray = [];
  this.forEach((element) => {
    newArray.push(callback(element));
  });
  return newArray;
};

console.log(
  "myFilter:",
  names.myFilter((name) => name.length > 4)
);
console.log(
  "myMap",
  numbers.myMap((n) => n * 10)
);

