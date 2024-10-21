/** @format */

const Officer = require("../models/Officer");

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
		res.status(500).send("Error retrieving officers");
	}
};

exports.resultsOfficerByBadgeNum = async (req, res) => {
	const { badge_num } = this.requestData(req);

	try {
		const searchResults = await Officer.findByBadgeNum(badge_num);

		res.status(200).send(searchResults);
	} catch (error) {
		res.status(500).send("Error retrieving officers");
	}
};

exports.requestData = req => {
	const { last_name, badge_num } = req.params;

	return { last_name };
};
