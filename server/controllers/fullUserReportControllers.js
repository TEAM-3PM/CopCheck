/** @format */

const UserReport = require("../models/UserReport");
const Content = require("../models/Content");

exports.createFullUserReport = async (req, res) => {
	const { currUserId, officer_id, contents } = this.requestData(req);

	try {
		const userReport = await UserReport.create(currUserId, officer_id);

		const reportContents = await Promise.all(
			contents.map(({ content, type }) =>
				Content.create(userReport.id, content, type)
			)
		);

		res.status(201).send(reportContents);
	} catch (error) {
		return res.status(500).send("Error creating report");
	}
};

exports.listFullUserReports = async (req, res) => {};
exports.listFullUserReportsForOfficer = async (req, res) => {};
exports.listFullUserReportsForUser = async (req, res) => {};

exports.requestData = req => {
	const { userId } = req.session;
	const { officer_id, user_id } = req.params;
	const { officer_id, contents } = req.body;

	return { currUserId: userId, officer_id, contents, user_id };
};
