const Comments = require("../models/Comments");

//create comment
exports.CreateComments = async (req, res) => {
  const { user_id, report_id, text } = req.body;
  const comment = await Comments.create(user_id, report_id, text);
  res.send(comment);
};
//update
exports.UpdateComments = async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  const updatedComment = await Comments.updateComment(id, text);
  if (!updatedComment) return res.sendStatus(404);
  res.send(comment);
};

//get all comments by report_id

exports.GetCommentsByReport = async (req, res) => {
  const { id } = req.params;
  const reportComments = await Comments.findByReportId(id);

  res.send(reportComments);
};
//delete comment

exports.DeleteComments = async (req, res) => {
  const { username } = req.body;
  const { id } = req.params;

  // Not only do users need to be logged in to update a user, they
  // need to be authorized to perform this action for this particular
  // user (users should only be able to change their own profiles)
  if (!isAuthorized(id, req.session)) return res.sendStatus(403);

  const deletedUser = await User.deleteUser(id);
  if (!deletedUser) return res.sendStatus(404);
  res.send(deletedUser);
};
