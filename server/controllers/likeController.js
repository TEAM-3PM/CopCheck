const Like = require("../models/Likes");
const UserReports = require("../models/UserReport");

exports.createLike = async (req, res) => {
  const { userId, report_id } = this.getUserAndReportIds(req);

  try {
    const report = await UserReports.find(report_id);
    if (!report)
      return res
        .status(404)
        .send(`Reports with Id: ${report_id} does not exist.`);

    const existingLike = await Like.checkLike(report_id, userId);
    if (existingLike) return res.status(409).send("Like already exists.");

    const newLike = await Like.addLike(report_id, userId);
    return res.status(201).send(newLike);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

exports.removeLike = async (req, res) => {
  const { userId, report_id } = this.getUserAndReportIds(req);

  try {
    const existingLike = await Like.checkLike(report_id, userId);
    if (!existingLike) return res.status(409).send("Like does not exist");

    await Like.removeLike(report_id, userId);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

exports.getUserAndReportIds = (req) => {
  const { userId } = req.session;
  const { report_id } = req.params;

  return { userId, report_id };
};
