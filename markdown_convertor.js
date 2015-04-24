var toMarkdown = require('to-markdown');
var fs = require('fs');

var input = fs.readFileSync('input.html').toString();
var output = toMarkdown(input);

fs.writeFileSync('./output.md', output);
