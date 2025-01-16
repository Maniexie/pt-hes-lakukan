const Mahasiswa = require("../models/Mahasiswa");
const { generateNPM } = require("../utils/constants");

const getMahasiswa = async (req, res) => {
  const mahasiswa = await Mahasiswa.find();
  try {
    if (!mahasiswa) {
      return res.status(404).json({
        message: "Mahasiswa Not Found",
      });
    }

    res.status(200).json({
      status_code: 200,
      message: "Success",
      data: mahasiswa,
    });
  } catch (error) {
    res.status(500).json({
      status_code: 500,
      message: error.message,
    });
  }
};

const createMahasiswa = async (req, res) => {
  const { nama, alamat, hobi } = req.body;

  const newNPM = await generateNPM();
  try {
    const mahasiswa = new Mahasiswa({
      nama,
      npm: newNPM,
      alamat,
      hobi,
    });

    await mahasiswa.save();
    res.status(201).json({
      status_code: 201,
      message: "Success",
      data: mahasiswa,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDetailMahasiswa = async (req, res) => {
  const { id } = req.params;
  const mahasiswa = await Mahasiswa.findById(id);
  try {
    if (!mahasiswa) {
      return res.status(404).json({
        message: "Mahasiswa Not Found",
      });
    }

    res.status(200).json({
      status_code: 200,
      message: "Success",
      data: mahasiswa,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    await mahasiswa.save();

    res.status(200).json({
      status_code: 200,
      status: "Success",
      data: mahasiswa,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteMahasiswa = async (req, res) => {
  const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
  try {
    if (!mahasiswa) {
      res.status(404).json({
        message: "Mahasiswa not Found",
      });
    }

    res.status(200).json({
      status_code: 200,
      message: "Success",
      data: mahasiswa,
    });
  } catch (error) {
    res.status({
      message: error.message,
    });
  }
};

module.exports = {
  getMahasiswa,
  createMahasiswa,
  getDetailMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
