#!javascript

var fs = require("fs"); //Load the filesystem module

fs.readFile("example_log.txt", function(err, logData) {
  if (err) throw err; //If an error occurs, throwing it will display the exception

  var text = logData.toString(); //logData is a buffer, convert to string
  var results = {};
  var lines = text.split("\n"); //Break up the file into lines

  lines.forEach(function(line) {
    var parts = line.split(" ");
    var letter = parts[1];
    var count = parseInt(parts[2]);

    if (!results[letter]) {
      results[letter] = 0;
    }
    results[letter] += parseInt(count);
  });
  console.log(results);
});
