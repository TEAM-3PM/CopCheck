/** @format */

const User = require("../../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async knex => {
	// Before you have models you can always just do `await knex('table_name').del`
	await knex("users").del();

	await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");

	// User.(username, password, full_name, email, age, race, gender)
	await User.create(
		"khyroutodaguy",
		"1234",
		"Mekhi Tudor",
		"email@gmail.com",
		22,
		"Black",
		"Man"
	);

	await User.create(
		"stonky",
		"sus",
		"Mekhi Miller",
		"yesno@maybe.so",
		21,
		"Black",
		"Man"
	);

	await User.create(
		"callhimpatt",
		"123",
		"Patrick Dacius",
		"idkman@gmail.com",
		24,
		"Black",
		"Man"
	);
};
