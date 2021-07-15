// make sure to ctrl+f for "open?" and replace with "uc?" inside the output csv
// also put the Lead organizer first followed by the directors followed by the team members
const parse = require('csv-parse')
const fs = require('fs');
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
	fs.writeFileSync('output.json', JSON.stringify(records, null, 4))
});
fs.createReadStream('formOutput.csv').pipe(parser)