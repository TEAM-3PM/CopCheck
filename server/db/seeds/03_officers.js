/** @format */

const Officer = require("../../models/Officer");

/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("officers").del();

	await knex.raw("ALTER SEQUENCE officers_id_seq RESTART WITH 1");

	// create(tax_id, precinct_id, first_name, last_name, badge_num, active_duty);
	await Officer.create(420, 1, "John", "Smith", 69, true, 16, 1);
	await Officer.create(421, 2, "Jane", "Doe", 70, true, 8, 0);
	await Officer.create(80, 2, "Alex", "White", 80, true, 20, 2);
	await Officer.create(69, 3, "Jane", "Johnson", 420, true, 19, 1);
	//real officers
	await Officer.create(966225, 78, "James", "Mills", 7625, true, 8, 2);
	await Officer.create(921207, 46, "David", "Centeno", 2148, true, 10, 1);
	await Officer.create(932637, 58, "Joseph", "Ferrari", 30978, false, 8, 0);
	await Officer.create(934557, 45, "Ramon", "Cabral", 23531, true, 17, 0);
};
