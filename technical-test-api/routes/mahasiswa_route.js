const express = require("express");

const mahasiswa_controller = require("../controllers/mahasiswa_controller");
const router = express.Router();

router.get("/mahasiswa", mahasiswa_controller.getMahasiswa);
router.get("/mahasiswa/:id", mahasiswa_controller.getDetailMahasiswa);
router.post("/mahasiswa/add", mahasiswa_controller.createMahasiswa);
router.put("/mahasiswa/:id", mahasiswa_controller.updateMahasiswa);
router.delete("/mahasiswa/:id", mahasiswa_controller.deleteMahasiswa);

module.exports = router;
