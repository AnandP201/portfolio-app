const router = require("express").Router();
const certificates = require("../models/certificate-model");

router.route("/").get((req, res) => {
  certificates
    .find()
    .then((certs) => res.json(certs))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
