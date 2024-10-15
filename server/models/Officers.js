/** @format */

//copy user model
//link controller up
const knex = require("../db/knex");

class Officer {
	// This constructor is NOT how a controller creates a new user in the database.
	// Think of it more like a formatter function. It is used by each of the User
	// static methods to hide the hashed password of users before sending user data
	// to the client. Since we want to keep the #passwordHash property private, we
	// provide the isValidPassword instance method as a way to indirectly access it.
	constructor({
		id,
		tax_id,
		precinct_id,
		first_name,
		last_name,
		badge_no,
		last_updated,
		active_duty,
	}) {
		this.id = id;
		this.tax_id = tax_id;
		this.precinct_id = precinct_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.badge_no = badge_no;
		this.last_updated = last_updated;
		this.active_duty = active_duty;
	}

	// This instance method takes in a plain-text password and returns true if it matches
	// the User instance's hashed password. Can be used by controllers.
	//   isValidPassword = async (password) =>
	//     authUtils.isValidPassword(password, this.#passwordHash);

	// Fetches ALL users from the users table, uses the constructor
	// to format each user (and hide their password hash), and returns.
	static async list() {
		const query = `SELECT * FROM officers`;
		const result = await knex.raw(query);
		return result.rows.map(rawUserData => new User(rawUserData));
	}

	// Fetches A single user from the users table that matches
	// the given user id. If it finds a user, uses the constructor
	// to format the user and returns or returns null if not.
	static async find(id) {
		const query = `SELECT * FROM officers WHERE id = ?`;
		const result = await knex.raw(query, [id]);
		const rawUserData = result.rows[0];
		return rawUserData ? new User(rawUserData) : null;
	}

	// Same as above but uses the username to find the user
	static async findByLastName(last_name) {
		const query = `SELECT * FROM officers WHERE last_name = ?`;
		const result = await knex.raw(query, [last_name]);
		const rawUserData = result.rows[0];
		return rawUserData ? new User(rawUserData) : null;
	}

	// Hashes the given password and then creates a new user
	// in the users table. Returns the newly created user, using
	// the constructor to hide the passwordHash.
	static async create(
		tax_id,
		precinct_id,
		first_name,
		last_name,
		badge_num,
		active_duty,
		total_complaints,
		total_substantiated_complaints
	) {
		// hash the plain-text password using bcrypt before storing it in the database

		const query = `INSERT INTO officers (tax_id,
    precinct_id,
    first_name,
    last_name,
    badge_num,
    active_duty, total_complaints, total_substantiated_complaints)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING *`;
		const result = await knex.raw(query, [
			tax_id,
			precinct_id,
			first_name,
			last_name,
			badge_num,
			active_duty,
			total_complaints,
			total_substantiated_complaints,
		]);
		const rawUpdatedOfficer = result.rows[0];
		return new Officer(rawUpdatedOfficer);
	}

	// Updates the user that matches the given id with a new username.
	// Returns the modified user, using the constructor to hide the passwordHash.
	static async updateTaxId(id, tax_id) {
		const query = `
        UPDATE officers
        SET tax_id=?
        WHERE id=?
        RETURNING *
      `;
		const result = await knex.raw(query, [tax_id, id]);
		const rawUpdatedOfficer = result.rows[0];
		return rawUpdatedOfficer ? new Officer(rawUpdatedOfficer) : null;
	}

	static async updateFirstName(id, first_name) {
		const query = `
        UPDATE officers
        SET first_name=?
        WHERE id=?
        RETURNING *
      `;
		const result = await knex.raw(query, [first_name, id]);
		const rawUpdatedOfficer = result.rows[0];
		return rawUpdatedOfficer ? new Officer(rawUpdatedOfficer) : null;
	}

	static async updateLastName(id, last_name) {
		const query = `
        UPDATE officers
        SET last_name=?
        WHERE id=?
        RETURNING *
      `;
		const result = await knex.raw(query, [last_name, id]);
		const rawUpdatedOfficer = result.rows[0];
		return rawUpdatedOfficer ? new Officer(rawUpdatedOfficer) : null;
	}

	static async updateBadgeNum(id, badge_no) {
		const query = `
        UPDATE officers
        SET badge_no=?
        WHERE id=?
        RETURNING *
      `;
		const result = await knex.raw(query, [badge_no, id]);
		const rawUpdatedOfficer = result.rows[0];
		return rawUpdatedOfficer ? new Officer(rawUpdatedOfficer) : null;
	}

	static async updateActiveDuty(id, active_duty) {
		const query = `
        UPDATE officers
        SET active_duty=?
        WHERE id=?
        RETURNING *
      `;
		const result = await knex.raw(query, [active_duty, id]);
		const rawUpdatedOfficer = result.rows[0];
		return rawUpdatedOfficer ? new Officer(rawUpdatedOfficer) : null;
	}

	static async deleteAll() {
		return knex("officers").del();
	}
}

module.exports = Officer;
