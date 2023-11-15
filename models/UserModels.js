const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.UserModels = mongoose.model(
  "User",
  new Schema({
    _id: false,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
    isStaff: { type: Boolean, default: false },
  })
);
