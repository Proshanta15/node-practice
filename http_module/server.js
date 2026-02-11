const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> My first web server yahoo. </h1>");
    res.write("<p> Hello My first server </p>");
    res.end();
  }
  if (req.url === "/shop") {
    res.setHeader("Content-Type", "text/plain");
    res.write("This is my shop page");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
