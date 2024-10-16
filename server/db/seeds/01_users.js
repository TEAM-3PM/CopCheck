/** @format */

const User = require("../../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async knex => {
	// Before you have models you can always just do `await knex('table_name').del`
	await knex("user_reports").del();
	await knex("users").del();

	await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");

	// User.create(username, password)
	await User.create(
		"cool_cat",
		"1234",
		"email@gmail.com",
		"mekhi tudor",
		22,
		"black",
		"man"
	);
};
