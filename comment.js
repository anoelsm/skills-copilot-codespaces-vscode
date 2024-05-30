// Create web server and listen to port 3000
// Start web server: node comment.js
// Access the server: http://localhost:3000

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<!DOCTYPE \"html\">");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Hello World Page</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("Hello World!");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
console.log("Server is listening");