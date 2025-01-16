const Mahasiswa = require("../models/Mahasiswa");
const { rateLimit } = require("express-rate-limit");

const generateNPM = async () => {
  const lastMahasiswa = await Mahasiswa.findOne().sort({ npm: -1 });
  let newNPM = "2212001";

  if (lastMahasiswa) {
    const lastNPM = lastMahasiswa.npm;
    const lastNumber = parseInt(lastNPM.toString().substring(4));
    newNPM = 2212001 + lastNumber;
  }

  return newNPM;
};

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: {
    status_code: 429,
    message: "Too many requests, please try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { generateNPM, limiter };
