const parse = require('node-csv-parse/lib/sync');
const fs    = require('fs'),
	  path  = require('path'),
	  filePath = path.join(__dirname, 'spin.csv');
var input;

fs.readFileSync(filePath, {encoding: 'utf-8'}, function(err, data) {
	if (!err) {
        console.log('opened file successfully');
        input = data;
    } else {
        console.log(err);
    }
});

var output = parse(input,{});
console.log(output);