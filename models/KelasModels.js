const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.KelasModels = mongoose.model(
  "Kelas",
  new Schema({
    kelas_id: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: true,
    },
    nama: { type: String, required: true },
    namaTrainer: { type: String, required: true },
    tanggalMulai: { type: Date, default: new Date() },
    isActive: { type: Boolean, default: true },
    username: { type: Schema.Types.ObjectId, ref: "UserModel", default: null },
  })
);
