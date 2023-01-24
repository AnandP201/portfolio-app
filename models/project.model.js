const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  tools: { type: [String], required: true },
  repo: { type: String, required: true },
  preview: { type: String, required: true },
});

const project = mongoose.model("project", projectSchema);

module.exports = project;
