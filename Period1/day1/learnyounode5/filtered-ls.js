const fs = require("fs");
const path = require("path");
var pathtodir = process.argv[2];
var extension = process.argv[3];

fs.readdir(pathtodir, function (err, list) {
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === "." + extension) {
      console.log(list[i]);
    }
  }
});
