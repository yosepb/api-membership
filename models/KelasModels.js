const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.KelasModel = mongoose.model(
  "Kelas",
  new Schema({
    nama: { type: String, required: true, unique: true },
    namaTrainer: { type: String, required: true },
    tanggalMulai: { type: Date, default: new Date() },
    isActive: { type: Boolean, default: true },
    username: { type: String, ref: "UserModel", default: null },
  })
);
