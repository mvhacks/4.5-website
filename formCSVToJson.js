const parse = require('csv-parse')
const fs = require('fs');
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
	fs.writeFileSync('output.json', JSON.stringify(records, null, 4))
});
fs.createReadStream('formOutput.csv').pipe(parser)