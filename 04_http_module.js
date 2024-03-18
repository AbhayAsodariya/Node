const http = require("http");

http
  .createServer(function (req, res) {
    res.write("hello");
    console.log("hello");
    res.end();
  })
  .listen(4000);

// write() and writeHead() are two methods provided by the http.serverresponse class, which is used to send a response back to the client during an http request.

// writeHead : the writeHead method is used to send the response header to the client. it takes in three parameters: statusCode, statusMessage, and an optional headers object.

// modules:

//modules is a collaction of code .
//modules can be a single file of collection of files or folders
//using of module we can reduce our code and its provide reusablity

//there are mainly  types of modules in node

// 1) core module
// 2) local module
// 3) third party module
