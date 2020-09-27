//2.Implement user defined functions that take callbacks as an argument

words = ["Hund", "Abe", "Elefant", "Giraf", "Belugahval"];
numbers = ["1", "12", "54", "64"];

//a)

function myFilter(array, callback) {
  let newArray = [];

  array.forEach((element) => {
    if (callback(element)) newArray.push(element);
  });

  return newArray;
}

//b)

function myMap(array, callback) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(callback(element));
  });
  return newArray;
}

console.log(
  "myFilter:",
  myFilter(words, (words) => words.length > 4)
);
console.log(
  "myMap:",
  myMap(numbers, (number) => number * 2)
);

console.log("build-in function");
console.log(
  "filter:",
  words.filter((word) => word.length > 4)
);
console.log(
  "map:",
  numbers.map((number) => number * 2)
);
