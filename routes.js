const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Halo World");
});

module.exports = app;
