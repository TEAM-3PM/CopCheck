/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("user_reports", table => {
		table.increments("id").primary();
		table.foreign("user_id").references("id").inTable("users");
		table.foreign("officer_id").references("id").inTable("officers");
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("user_reports");
