const Comments = require("../models/Comments");

//create comment
exports.CreateComments = async (req, res) => {
  const { user_id, report_id, text } = req.body;
  const comment = await Comments(user_id, report_id, text);
  res.send(comment);
};
//update

//delete comment
