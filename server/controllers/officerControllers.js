/** @format */

const Officer = require("../models/Officer");

exports.listOfficers = async (req, res) => {
	const officers = await Officer.list();
	res.send(officers);
};
