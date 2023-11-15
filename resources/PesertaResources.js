const express = require("express");
const { PesertaModel } = require("../models/PesertaModels");
const app = express();

const IsAuthenticated = require("../middlewares/IsAuthenticated");

// endpoint tambah data
app.post("/", [IsAuthenticated], async (req, res) => {
  const user = await PesertaModel.findOne({ username: req.body.username });

  if (!user) {
    return res.status(401).json({ detail: "User tidak ditemukan." });
  }

  await PesertaModel.create(req.body);
  return res.status(201).json(req.body);
});

// endpoint ambil data peserta
app.get("/", [IsAuthenticated], async (req, res) => {
  const products = await PesertaModel.find();
  return res.status(200).json(products);
});

module.exports = app;
