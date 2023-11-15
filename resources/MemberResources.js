const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { MemberModel } = require("../models/MemberModels");
const { PesertaModel } = require("../models/PesertaModels");
const { KelasModel } = require("../models/KelasModels");
const IsAuthenticated = require("../middlewares/IsAuthenticated");

// endpoint create data
app.post("/", [IsAuthenticated], async (req, res) => {
  const { peserta_id, kelas_id } = req.body;
  const peserta = await PesertaModel.findById(peserta_id);
  const kelas = await KelasModel.findById(kelas_id);

  if (!peserta || !kelas) {
    return res.status(404).json({ message: "Peserta or kelas not found" });
  }

  await MemberModel.create({ peserta_id, kelas_id });
  return res.status(201).json(req.body);
});

// endpoint ambil data
app.get("/", [IsAuthenticated], async (req, res) => {
  const member = await MemberModel.find();
  return res.status(200).json(member);
});

// endpoint hapus data
app.delete("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ detail: "404 Resource not found" });
  }
  await MemberModel.findOneAndDelete({ _id: req.params.id });

  return res.status(204).json(null);
});

module.exports = app;
