const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { PesertaModel } = require("../models/PesertaModels");
const { UserModel } = require("../models/UserModels");
const IsAuthenticated = require("../middlewares/IsAuthenticated");

// endpoint create data
app.post("/", [IsAuthenticated], async (req, res) => {
  // const user = await UserModel.findOne({ username: req.body.username });

  // if (!user) {
  //   return res.status(401).json({ detail: "User tidak ditemukan." });
  // }

  await PesertaModel.create(req.body);
  return res.status(201).json(req.body);
});

// endpoint lihat data
app.get("/", [IsAuthenticated], async (req, res) => {
  const peserta = await PesertaModel.find();
  return res.status(200).json(peserta);
});

// endpoint lihat data by Id
app.get("/:id", [IsAuthenticated], async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ detail: "404 Resource not found" });
  }

  const peserta = await PesertaModel.findById(req.params.id, { __v: 0 });
  if (!peserta) {
    return res.status(404).json({ detail: "404 Resource not found" });
  }
  return res.status(200).json(peserta);
});

// endpoint edit data
app.put("/:id", [IsAuthenticated], async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ detail: "404 Resource not found" });
  }

  const result = await PesertaModel.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { new: true }
  );

  return res.status(200).json(result);
});

module.exports = app;
