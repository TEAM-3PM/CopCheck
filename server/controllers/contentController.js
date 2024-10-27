//create content
const Content = require("../models/Content");

exports.createContent = async (req, res) => {
  try {
    const { report_id, content, type } = req.body;
    if (!report_id) return res.send("need report id");
    if (!content) return res.send("need content");
    if (!type) return res.send("need type");
    const newContent = await Content.create(report_id, content, type);

    res.send(newContent);
  } catch (err) {
    res.send(err);
  }
};
//list all
//list one piece of content
//update content
//delete content
