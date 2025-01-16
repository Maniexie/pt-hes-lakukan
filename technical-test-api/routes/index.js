const express = require("express");

const mahasiswa_route = require("./mahasiswa_route");

const router = express.Router();

router.use(mahasiswa_route);

module.exports = router;
