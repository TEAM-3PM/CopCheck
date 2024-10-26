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

//delete comment
