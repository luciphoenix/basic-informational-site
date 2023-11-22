const fs = require("fs");
const http = require("http");
const path = require("path");

// I used fs methods to create the files for the web and .gitignore file
// fs.writeFile(path.join(__dirname, ".gitignore"), "", (err) => console.log(err));

const server = http.createServer((req, res) => {
  const file = req.url === "/" ? "index.html" : req.url;
  const filepath = path.join(__dirname, file);
  const extension = path.extname(filepath);
  const contentType = "text/html";

  switch (extension) {
    case ".json":
      contentType = "application/json";
      break;
    case ".css":
      contentType = "style/css";
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      break;
  }
  console.log(contentType);
  fs.readFile(filepath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
          console.log(`${err} has occurred`);
          res.end(data);
        });
      }
    } else {
      res.writeHead(200, { "content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(8000, () => console.log("server running ..."));
