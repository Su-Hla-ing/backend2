const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const isRootUrl = req.url === "/";
  if (isRootUrl) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/backend2/script.js") {
    fs.readFile("script.js", (err, data) => {
      res.writeHead(200, { "Content-type": "text/javascript" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/data") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(JSON.stringify({ name: "Emily", age: 19 }));
    return res.end();
  } else {
    res.writeHead(500, { "Content-type": "text/plain" });
    res.write("404 Page are not found");
    return res.end();
  }
});
server.listen(3000, () => {
  console.log("Server started: Listening on port 3000");
});
