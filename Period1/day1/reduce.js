//the reduce-method

//a) Use join to create a single string from all,
//with names: comma-, space. and  # - separated.

var all = ["Lars", "Peter", "Jan", "Bo"];

all = all.join(", #");
console.log(all);

//b) Given this array:
var numbers = [2, 3, 67, 33];
//Create a reducer function that will return the
//sum (105) of all values in numbers

myReduce = function (numbers) {
  newNumber = 0;
  numbers.forEach((number) => (newNumber += number));

  return newNumber;
};

console.log(myReduce(numbers));

//c)  Given this array:

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

//Create a reducer function that will
// return the average age of all members.

Array.prototype.reducer = function (callback) {
  let accumulator;
  this.forEach((element) => {
    if (!accumulator) {
      accumulator = element.age;
    } else {
      accumulator = callback(accumulator, element.age);
    }
  });
  return accumulator / this.length;
};

console.log(members.reducer((acc, curr) => acc + curr));

//d) Imagine you were to create a system that could count votes
//for the presidential election in USA.
//Given this array of votes:
//Create a reduce function that will return
// a single object like {Clinton: 3, Trump: 4, None: 1 }

var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

function countVotes(votes) {
  var counts = {};
  votes.forEach((element) => {
    if (counts[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  });
  return counts;
}

console.log(countVotes(votes));
