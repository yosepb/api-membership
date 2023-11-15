const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModels");
const app = express();

// endpoint proses daftar
app.post("/signup", async (req, res) => {
  const oldUser = await UserModel.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  });

  if (oldUser) {
    return res
      .status(400)
      .json({ detail: "Email sudah terdaftar, silahkan signin." });
  }

  req.body.password = await bcrypt.hash(req.body.password, 10);

  await UserModel.create(req.body);

  return res.status(201).json({ detail: "Pendaftaran berhasil" });
});

// endpoint proses signin
app.post("/signin", async (req, res) => {
  const user = await UserModel.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  });

  if (!user) {
    return res.status(401).json({ detail: "User belum terdaftar." });
  }

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isValidPassword) {
    return res
      .status(401)
      .json({ detail: "Password tidak valid / tidak sama." });
  }

  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    process.env.TOKEN_KEY,
    { expiresIn: "24h" }
  );

  return res.status(200).json({ token });
});

module.exports = app;
