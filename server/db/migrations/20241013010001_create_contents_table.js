/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex => {
	return knex.schema.createTable("contents", table => {
		table.increments("id").primary();
		table.integer("report_id").notNullable();
		table.foreign("report_id").references("id").inTable("user_reports");
		table.timestamps(true, true);
		table.string("type").notNullable();
		table.string("content").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("contents");
