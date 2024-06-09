import http from "http";
import fs from "fs/promises";

async function sendHtml(res, path) {
  const html = await fs.readFile(path);
  res.end(html);
}

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      sendHtml(res, "./index.html");
      break;
    case "/about":
      sendHtml(res, "./about.html");
      break;
    case "/contact":
      sendHtml(res, "./contact-me.html");
      break;
    default:
      res.end("Page not found");
  }
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
