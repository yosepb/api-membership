const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.MemberModels = mongoose.model(
  "Member",
  new Schema({
    _id: false,
    peserta: {
      type: Schema.Types.ObjectId,
      ref: "Peserta",
      required: true,
    },
    kelas: {
      type: Schema.Types.ObjectId,
      ref: "Kelas",
      required: true,
    },
  })
);
