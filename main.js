var http = require("http");
var fs = require("fs");
var app = http.createServer(function(request, response) {
  var url = request.url;
  if (url == "/") {
    url = "/story.html";
  }
  try {
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
  } catch {}
});
app.listen(3000);
