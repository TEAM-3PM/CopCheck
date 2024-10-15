/** @format */

const Officer = require("../../models/Officers");

/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("officers").del();

	await knex.raw("ALTER SEQUENCE officers_id_seq RESTART WITH 1");

	// create(tax_id, precinct_id, first_name, last_name, badge_no, active_duty);
	await Officer.create(420, 1, "John", "Smith", 69, true, 16, 1);
	await Officer.create(421, 2, "Jane", "Doe", 70, true, 8, 0);
	await Officer.create(80, 2, "Alex", "White", 80, true, 20, 2);
	await Officer.create(69, 3, "Jane", "Johnson", 420, true, 19, 1);
};
