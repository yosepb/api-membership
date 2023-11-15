const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.MemberModel = mongoose.model(
  "Member",
  new Schema({
    peserta_id: {
      type: Schema.Types.ObjectId,
      ref: "Peserta",
      required: true,
    },
    kelas_id: {
      type: Schema.Types.ObjectId,
      ref: "Kelas",
      required: true,
    },
  })
);
