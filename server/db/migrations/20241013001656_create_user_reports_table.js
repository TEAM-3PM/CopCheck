/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex => {
	return knex.schema.createTable("user_reports", table => {
		table.increments("id").primary();
		table.integer("user_id").notNullable();
		table.foreign("user_id").references("id").inTable("users");
		table.integer("officer_id").notNullable();
		table.foreign("officer_id").references("id").inTable("officers");
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("user_reports");
