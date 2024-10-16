const knex = require("../db/knex");

class Content {
  // Fetches ALL users from the users table, uses the constructor
  // to format each user (and hide their password hash), and returns.
  static async list() {
    const query = `SELECT * FROM contents`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new Content(rawUserData));
  }

  // Fetches A single user from the users table that matches
  // the given user id. If it finds a user, uses the constructor
  // to format the user and returns or returns null if not.
  static async find(id) {
    const query = `SELECT * FROM contents WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserData = result.rows[0];
    return rawUserData ? new Content(rawUserData) : null;
  }

  // Same as above but uses the username to find the user
  static async findReportId(report_id) {
    const query = `SELECT * FROM contents WHERE report_id = ?`;
    const result = await knex.raw(query, [report_id]);
    const rawUserData = result.rows[0];
    return rawUserData ? new Content(rawUserData) : null;
  }

  // Hashes the given password and then creates a new user
  // in the users table. Returns the newly created user, using
  // the constructor to hide the passwordHash.
  static async create(report_id, content, type) {
    const query = `INSERT INTO contents (report_id, content, type)
      VALUES (?, ?, ?) RETURNING *`;
    const result = await knex.raw(query, [report_id, content, type]);
    const rawUserData = result.rows[0];
    return new Content(rawUserData);
  }

  // Updates the user that matches the given id with a new username.
  // Returns the modified user, using the constructor to hide the passwordHash.

  static async updateContent(id, content) {
    const query = `
      UPDATE contents
      SET content=?
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, [full_name, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new Content(rawUpdatedUser) : null;
  }

  static async deleteAll() {
    return knex("contents").del();
  }
}

module.exports = Content;
