const knex = require("../db/knex");
const authUtils = require("../utils/auth-utils");

class User {
  #passwordHash = null; // a private property

  // This constructor is NOT how a controller creates a new user in the database.
  // Think of it more like a formatter function. It is used by each of the User
  // static methods to hide the hashed password of users before sending user data
  // to the client. Since we want to keep the #passwordHash property private, we
  // provide the isValidPassword instance method as a way to indirectly access it.
  constructor({
    id,
    username,
    password_hash,
    email,
    full_name,
    age,
    race,
    gender,
  }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.email = email;
    this.full_name = full_name;
    this.age = age;
    this.race = race;
    this.gender = gender;
  }

  // This instance method takes in a plain-text password and returns true if it matches
  // the User instance's hashed password. Can be used by controllers.
  isValidPassword = async (password) =>
    authUtils.isValidPassword(password, this.#passwordHash);

  // Fetches ALL users from the users table, uses the constructor
  // to format each user (and hide their password hash), and returns.
  static async list() {
    const query = `SELECT * FROM users`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new User(rawUserData));
  }

  // Fetches A single user from the users table that matches
  // the given user id. If it finds a user, uses the constructor
  // to format the user and returns or returns null if not.
  static async find(id) {
    const query = `SELECT * FROM users WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  // Same as above but uses the username to find the user
  static async findByUsername(username) {
    const query = `SELECT * FROM users WHERE username = ?`;
    const result = await knex.raw(query, [username]);
    const rawUserData = result.rows[0];
    return rawUserData ? new User(rawUserData) : null;
  }

  // Hashes the given password and then creates a new user
  // in the users table. Returns the newly created user, using
  // the constructor to hide the passwordHash.
  static async create(username, password, full_name, email, age, race, gender) {
    // hash the plain-text password using bcrypt before storing it in the database
    const passwordHash = await authUtils.hashPassword(password);

    const query = `INSERT INTO users (username, password_hash, full_name, email, age, race, gender)
      VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *`;
    const result = await knex.raw(query, [
      username,
      passwordHash,
      full_name,
      email,
      age,
      race,
      gender,
    ]);
    const rawUserData = result.rows[0];
    return new User(rawUserData);
  }

  // Updates the user that matches the given id with a new username.
  // Returns the modified user, using the constructor to hide the passwordHash.
  static async updateUsername(id, username) {
    const query = `
      UPDATE users
      SET username=?
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, [username, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async updatePassword(id, password_hash) {
    const query = `
      UPDATE users
      SET password_hash=?
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, [password_hash, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async updateName(id, full_name) {
    const query = `
      UPDATE users
      SET full_name=?
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, [full_name, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async updateAge(id, age) {
    const query = `
      UPDATE users
      SET age=?
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, [age, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async updateRace(id, race) {
    const query = `
      UPDATE users
      SET race=?
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, [username, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async updateGender(id, gender) {
    const query = `
      UPDATE users
      SET gender=?
      WHERE id=?
      RETURNING *
    `;
    const result = await knex.raw(query, [gender, id]);
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new User(rawUpdatedUser) : null;
  }

  static async deleteAll() {
    return knex("users").del();
  }

  static async deleteUser(id) {
    const query = `
    DELETE FROM comments
WHERE user_id = ?;
 DELETE FROM contents
WHERE user_id = ?;

    DELETE FROM user_reports
WHERE user_id = ?;

    DELETE FROM users
WHERE id = ?;
   
  `;

    const result = await knex.raw(query, [id, id, id, id]);
    if (result) return "user deleted";
    else return null;
  }
}

/*
  await knex("contents").del();
  await knex("comments").del();
  await knex("user_reports").del();
  await knex("users").del();
  await knex("public_complaints").del();
  await knex("officers").del();
  await knex("precincts").del();


*/

module.exports = User;
