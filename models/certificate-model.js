const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const certificateSchema = new Schema({
  course: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const certificate = mongoose.model("certificate", certificateSchema);

module.exports = certificate;
