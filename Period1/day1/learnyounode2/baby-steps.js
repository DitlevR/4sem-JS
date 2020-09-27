var numbers = 0;
for(var arg = 2; arg < process.argv.length; arg++){
	numbers += Number(process.argv[arg])
}

console.log(numbers)
