/** @format */

const Officer = require("../models/Officer");
const PublicComplaint = require('../models/PublicComplaint')

exports.findById = async (req, res) => {
	const { id } = this.requestData(req);

	try {
		const officer = await Officer.find(id);
		if (!officer) return res.sendStatus(404);

		res.status(200).send(officer);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error retrieving officer");
	}
};


exports.findByIdWithComplaints = async (req, res) => {
	const { id } = this.requestData(req);

	try {
		const officer = await Officer.find(id);
		if (!officer) return res.sendStatus(404);

		officer.publicComplaints = await PublicComplaint.findOfficerByTaxId(
			officer.tax_id
		);

		res.status(200).send(officer);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error retrieving officer");
	}
};

exports.listOfficers = async (req, res) => {
	const officers = await Officer.list();
	res.send(officers);
};

exports.resultsOfficerByLastName = async (req, res) => {
	const { last_name } = this.requestData(req);

	try {
		const searchResults = await Officer.findByLastName(last_name);

		res.status(200).send(searchResults);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error retrieving officers");
	}
};

exports.resultsOfficerByBadgeNum = async (req, res) => {
	const { badge_num } = this.requestData(req);

	try {
		const searchResults = await Officer.findByBadgeNum(badge_num);

		res.status(200).send(searchResults);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error retrieving officers");
	}
};

exports.requestData = req => {
	const { id, last_name, badge_num } = req.params;

	return { id, last_name, badge_num };
};
