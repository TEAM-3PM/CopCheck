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

exports.requestData = req => {
	const { userId } = req.session;
	const { officer_id, contents } = req.body;

	return { currUserId: userId, officer_id, contents };
};
