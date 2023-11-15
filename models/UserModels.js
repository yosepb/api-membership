const mongoose = require("mongoose");
// const { Schema } = mongoose;

exports.UserModel = mongoose.model(
  "User",
  new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true },
    isActive: { type: Boolean, default: true },
    isStaff: { type: Boolean, default: false },
  })
);
