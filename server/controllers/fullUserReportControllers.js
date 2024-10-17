/** @format */

const UserReport = require("../models/UserReport");
const Content = require("../models/Content");

exports.requestData = req => {
	const { userId } = req.session;
	const { officer_id, contents } = req.body;

	return { currUserId: userId, officer_id, contents };
};
