/** @format */

const UserReport = require("../models/UserReport");
const Content = require("../models/Content");
const FullUserReport = require("../models/FullUserReport");

exports.createFullUserReport = async (req, res) => {
	const { currUserId, body_officer_id, contents } = this.requestData(req);

	try {
		const userReport = await UserReport.create(currUserId, body_officer_id);

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

exports.listFullUserReports = async (req, res) => {
	try {
		const userReports = await FullUserReport.list();

		res.status(200).send(userReports);
	} catch (error) {
		return res.status(500).send("Error retrieving report data");
	}
};

exports.listFullUserReportsForOfficer = async (req, res) => {
	const { param_officer_id } = this.requestData(req);

	try {
		const userReportsByOfficerId = await FullUserReport.findByOfficerId(
			param_officer_id
		);

		res.status(200).send(userReportsByOfficerId);
	} catch (error) {
		console.log(error)
		return res.status(500).send("Error retrieving report data");
	}
};

exports.listFullUserReportsForUser = async (req, res) => {
	const { user_id } = this.requestData(req);

	try {
		const userReportsByUserId = await FullUserReport.findByUserId(user_id);

		res.status(200).send(userReportsByUserId);
	} catch (error) {
		return res.status(500).send("Error retrieving report data");
	}
};

exports.requestData = req => {
	const { userId } = req.session;
	const { officer_id: param_officer_id, user_id } = req.params;
	const { officer_id: body_officer_id, contents } = req.body;

	return {
		currUserId: userId,
		body_officer_id,
		contents,
		param_officer_id,
		user_id,
	};
};

