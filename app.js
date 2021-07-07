const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.listen(3000, () => console.log("working"));
app.use(express.static("./public"));
app.use("*", function (req, res) {
  if (req.params[0].indexOf("mp3") !== -1) {
    setTimeout(() => {
      res.send(fs.readFileSync(path.join(__dirname, req.params[0])));
    }, 5000);
  } else if (req.params[0].indexOf("css") !== -1) {
    setTimeout(() => {
      res.setHeader("content-type", "text/css");
      res.send(fs.readFileSync(path.join(__dirname, req.params[0])));
    }, 5000);
  } else if (req.params[0].indexOf("js") !== -1) {
    setTimeout(() => {
      res.send(fs.readFileSync(path.join(__dirname, req.params[0])));
    }, 5000);
  }
});
