const fs = require('fs')

const path = process.argv[2]

const buf = fs.readFileSync(path)
const text = buf.toString().split('\n')
console.log(text.length-1)
