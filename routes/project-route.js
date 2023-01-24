const router = require("express").Router();
const projects = require("../models/project.model");

router.route("/").get((req, res) => {
  projects
    .find()
    .then((certs) => res.json(certs))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
