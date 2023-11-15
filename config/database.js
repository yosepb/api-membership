require("dotenv").config();
const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Berhasil terhubung ke database"))
  .catch((err) => console.error("Koneksi gagal", err));
