const knex = require("../db/knex");
const UserReport = require("./UserReport");
const Content = require("./Content");

class FullUserReport {
  //get all full reports for officer

  static async getAllByOfficer() {
    const SQL = `SELECT 
    user_reports.id AS report_id,
    user_reports.user_id,
    user_reports.officer_id,
    user_reports.created_at AS report_created_at,
    contents.id AS content_id,
    contents.content,
    contents.type,
    contents.created_at AS content_created_at
FROM 
    user_reports
JOIN 
    contents ON user_reports.id = contents.report_id;`;
  }

  static async deleteAll() {
    return knex("officers").del();
  }
}

module.exports = FullUserReport;
