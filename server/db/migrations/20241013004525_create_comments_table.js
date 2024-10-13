/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
	return knex.schema.createTable("comments", table => {
		table.increments("id").primary();
		table.integer("user_id").notNullable();
		table.foreign("user_id").references("id").inTable("users");
		table.integer("report_id").notNullable();
		table.foreign("report_id").references("id").inTable("user_reports");
		table.timestamps(true, true);
		table.string("text").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("comments");
