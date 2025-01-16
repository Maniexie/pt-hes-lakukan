const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    trim: true,
  },
  npm: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  alamat: {
    provinsi: { type: String, required: true },
    kota: { type: String, required: true },
    jalan: { type: String, required: true },
  },
  hobi: { type: [String], required: true },
  timestaps: {},
});

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);
