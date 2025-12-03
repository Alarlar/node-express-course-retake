const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello, world!");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Serer is running on http://localhost:3000");
});
