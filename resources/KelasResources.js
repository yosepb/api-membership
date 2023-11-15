const express = require("express");
const app = express();

const { KelasModel } = require("../models/KelasModels");
const IsAuthenticated = require("../middlewares/IsAuthenticated");

// endpoint tambah data
app.post("/", [IsAuthenticated], async (req, res) => {
  const user = await KelasModel.findOne({ username: req.body.username });

  if (!user) {
    return res.status(401).json({ detail: "User tidak ditemukan." });
  }

  await KelasModel.create(req.body);
  return res.status(201).json(req.body);
});

// endpoint ambil data kelas
app.get("/", [IsAuthenticated], async (req, res) => {
  const products = await KelasModel.find();
  return res.status(200).json(products);
});

module.exports = app;
