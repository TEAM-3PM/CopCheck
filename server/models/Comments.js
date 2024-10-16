/** @format */

//copy user model
//link controller up
const knex = require("../db/knex");

class Comments {
  // This constructor is NOT how a controller creates a new user in the database.
  // Think of it more like a formatter function. It is used by each of the User
  // static methods to hide the hashed password of users before sending user data
  // to the client. Since we want to keep the #passwordHash property private, we
  // provide the isValidPassword instance method as a way to indirectly access it.
  constructor({ id, user_id, report_id, text }) {
    this.id = id;
    this.user_id = user_id;
    this.report_id = report_id;
    this.text = text;
  }

  // This instance method takes in a plain-text password and returns true if it matches
  // the User instance's hashed password. Can be used by controllers.
  //   isValidPassword = async (password) =>
  //     authUtils.isValidPassword(password, this.#passwordHash);

  // Fetches ALL users from the users table, uses the constructor
  // to format each user (and hide their password hash), and returns.
  static async list() {
    const query = `SELECT * FROM comments`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new Comments(rawUserData));
  }

  // Fetches A single user from the users table that matches
  // the given user id. If it finds a user, uses the constructor
  // to format the user and returns or returns null if not.
  static async find(id) {
    const query = `SELECT * FROM comments WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserData = result.rows[0];
    return rawUserData ? new Comments(rawUserData) : null;
  }

  // Same as above but uses the username to find the user

  // Hashes the given password and then creates a new user
  // in the users table. Returns the newly created user, using
  // the constructor to hide the passwordHash.
  static async create(id, user_id, report_id, text) {
    // hash the plain-text password using bcrypt before storing it in the database

    const query = `INSERT INTO officers ( id, user_id, report_id, text )
        VALUES (?, ?, ?, ?) RETURNING *`;
    const result = await knex.raw(query, [id, user_id, report_id, text]);
    const rawUpdatedPrecincts = result.rows[0];
    return new Comments(rawUpdatedPrecincts);
  }

  // Updates the user that matches the given id with a new username.
  // Returns the modified user, using the constructor to hide the passwordHash.
  static async updateComment(id, text) {
    const query = `
        UPDATE comments
        SET text=?
        WHERE id=?
        RETURNING *
      `;
    const result = await knex.raw(query, [text, id]);
    const rawUpdatedOfficer = result.rows[0];
    return rawUpdatedOfficer ? new Comments(rawUpdatedOfficer) : null;
  }

  static async deleteAll() {
    return knex("comments").del();
  }
}

module.exports = Comments;
