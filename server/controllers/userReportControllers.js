/** @format */

const UserReport = require("../models/UserReport");

exports.createUserReport = async (req, res) => {
	const { user_id, officer_id } = req.body;

	const userReport = await UserReport.create(user_id, officer_id);
};
