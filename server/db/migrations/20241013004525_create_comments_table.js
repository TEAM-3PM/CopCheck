/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex =>
	knex.schema.createTable("comments", table => {
		table.increments("id").primary();
		table.integer("user_id").notNullable();
		table.integer("report_id").notNullable();
		table.timestamps(true, true);
		table.string("text").notNullable();
	});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("comments");
