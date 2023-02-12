const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h2>Hello world!</h2>`);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
