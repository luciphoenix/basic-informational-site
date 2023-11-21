const fs = require("fs");
const http = require("http");
const path = require("path");

// I used fs methods to create the files for the web and .gitignore file
fs.writeFile(path.join(__dirname, ".gitignore"), "", (err) => console.log(err));

const server = http.createServer((req, res) => {
  res.write("Creating web server with node");
  res.end();
});

server.listen(3000, "localhost", () => console.log("server running ..."));
