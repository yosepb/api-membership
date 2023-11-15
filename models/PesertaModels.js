const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.PesertaModels = mongoose.model(
  "Peserta",
  new Schema({
    nama: { type: String, required: true },
    alamat: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    tanggalGabung: { type: Date, default: new Date() },
    username: { type: Schema.Types.ObjectId, ref: "UserModel", default: null },
  })
);
