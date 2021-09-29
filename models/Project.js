const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
	title: String,
	description: String,
	url: String,
	github: String
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;