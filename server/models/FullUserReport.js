/** @format */

const knex = require("../db/knex");
const UserReport = require("./UserReport");
const Content = require("./Content");

class FullUserReport {
	//get all full reports for officer

	static async list() {
		const query = `
    SELECT 
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

		const result = await knex.raw(query);
		return result.rows;
	}

	static async findByOfficerId(idQuery) {
		const query = `
    SELECT 
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
      contents ON user_reports.id = contents.report_id
    WHERE 
      officer_id = ?;`;

		const result = await knex.raw(query, [idQuery]);
		return result.rows;
	}

	static async findByUserId(idQuery) {
		const query = `
    SELECT 
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
      contents ON user_reports.id = contents.report_id
    WHERE 
      user_id = ?;`;

		const result = await knex.raw(query, [idQuery]);
		return result.rows;
	}

	static async deleteAll() {
		return knex("officers").del();
	}
}

module.exports = FullUserReport;
