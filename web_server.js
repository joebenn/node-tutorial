#!javascript
var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200);
    res.write('<h1>Hello Node!</h1>')
    res.end();
}).listen(8080);

console.log('Server running on port 8080.');