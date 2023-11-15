require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Halo World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server sudah jalan di port ${process.env.PORT}.`);
});
