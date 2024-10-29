/** @format */

//copy user model
//link controller up
const knex = require("../db/knex");

class UserReport {
	// This constructor is NOT how a controller creates a new user in the database.
	// Think of it more like a formatter function. It is used by each of the User
	// static methods to hide the hashed password of users before sending user data
	// to the client. Since we want to keep the #passwordHash property private, we
	// provide the isValidPassword instance method as a way to indirectly access it.
	constructor({ id, user_id, officer_id }) {
		this.id = id;
		this.user_id = user_id;
		this.officer_id = officer_id;
	}

	// This instance method takes in a plain-text password and returns true if it matches
	// the User instance's hashed password. Can be used by controllers.
	//   isValidPassword = async (password) =>
	//     authUtils.isValidPassword(password, this.#passwordHash);

	// Fetches ALL users from the users table, uses the constructor
	// to format each user (and hide their password hash), and returns.
	static async list() {
		const query = `SELECT * FROM user_reports`;
		const result = await knex.raw(query);
		return result.rows.map(rawUserData => new UserReport(rawUserData));
	}

	// Fetches A single user from the users table that matches
	// the given user id. If it finds a user, uses the constructor
	// to format the user and returns or returns null if not.
	static async find(id) {
		const query = `SELECT * FROM user_reports WHERE id = ?`;
		const result = await knex.raw(query, [id]);
		const rawUserData = result.rows[0];
		return rawUserData ? new UserReport(rawUserData) : null;
	}

	static async findByOfficerId(officer_id) {
		const query = `
			SELECT
			user_reports.*, users.username
		FROM
			user_reports
			JOIN users ON user_reports.user_id = users.id
		WHERE
			officer_id = ?;`;
		const result = await knex.raw(query, [officer_id]);
		return result.rows;
	}
	static async findByUserId(user_id) {
		const query = `SELECT * FROM user_reports WHERE user_id = ?`;
		const result = await knex.raw(query, [user_id]);
		return result.rows[0] // if there is at least 1 user_report for the given officer
			? result.rows.map(rawUserData => new UserReport(rawUserData)) // return all reports for that officer
			: null; // otherwise return null, indicating no reports existed for that officer
	}

	// Hashes the given password and then creates a new user
	// in the users table. Returns the newly created user, using
	// the constructor to hide the passwordHash.
	static async create(user_id, officer_id) {
		const query = `INSERT INTO user_reports ( user_id, officer_id )
        VALUES (?, ?) RETURNING *`;
		const result = await knex.raw(query, [user_id, officer_id]);
		const rawUserData = result.rows[0];
		return new UserReport(rawUserData);
	}

	// Updates the user that matches the given id with a new username.
	// Returns the modified user, using the constructor to hide the passwordHash.
	static async updateUserId(id, user_id) {
		const query = `
        UPDATE user_reports
        SET user_id=?
        WHERE id=?
        RETURNING *
      `;
		const result = await knex.raw(query, [user_id, id]);
		const rawUpdatedUser = result.rows[0];
		return rawUpdatedUser ? new UserReport(rawUpdatedUser) : null;
	}

	static async updateOfficerId(id, officer_id) {
		const query = `
        UPDATE user_reports
        SET officer_id=?
        WHERE id=?
        RETURNING *
      `;
		const result = await knex.raw(query, [officer_id, id]);
		const rawUpdatedUser = result.rows[0];
		return rawUpdatedUser ? new UserReport(rawUpdatedUser) : null;
	}

	static async deleteAll() {
		return knex("user_reports").del();
	}
}

module.exports = UserReport;
