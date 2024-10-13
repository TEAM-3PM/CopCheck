/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex =>
	knex.schema.createTable("user_reports", table => {
		table.increments("id").primary();
		table.integer("user_id").notNullable();
		table.integer("officer_id").notNullable();
		table.timestamps(true, true);
	});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("user_reports");
