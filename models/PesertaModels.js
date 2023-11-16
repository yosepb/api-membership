const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.PesertaModel = mongoose.model(
  "Peserta",
  new Schema({
    nama: { type: String, required: true },
    alamat: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    tanggalGabung: { type: Date, default: new Date() },
    username: { type: String, ref: "UserModel", default: null },
    kelas_id: [
      {
        type: String,
        ref: "KelasModel",
        default: null,
      },
    ],
  })
);
