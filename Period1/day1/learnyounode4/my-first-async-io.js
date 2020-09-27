const file = process.argv[2]
const fs = require('fs')

fs.readFile(file, function(err, data) {
	var lines = data.toString().split('\n').length-1
	console.log(lines)

}); 

