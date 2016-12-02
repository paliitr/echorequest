var http = require('http');
var util = require('util');
var port = 3001;

var output = function(req, res) {
  out = ""
  req_method = req.method;
  base_url = req.baseUrl;
  body = req.body;
  cookies = req.cookies;
  header_string = util.inspect(req.headers, false, null);
  req_ip = req.ip;
  orig_url = req.originalUrl;
  params = req.params;
  path = req.path;
  protocol = req.protocol;
  secure = req.secure;

  // out += req_method + " " + path + " " + protocol + "</br>";
  out += req_method + "</br>";
  out += header_string + "</br>";
  // out += "Body: " + body + "</br>";
  // out += "Params: " + params + "</br>";
  // out += "Cookies: " + cookies + "</br>";
  // out += "Secure: " + secure;

  console.log(header_string);
  console.log(req_ip);
  console.log(orig_url);

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(out);
  res.end();
}

var server = http.createServer(output);

server.listen(port, function(){
  console.log("Server is running at Port: %s", port)
})
