/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex =>
	knex.schema.alterTable("officers", table => {
		table.integer("total_complaints").notNullable();
		table.integer("total_substantiated_complaints").notNullable();
	});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex =>
	knex.schema.alterTable("officers", table => {
		table.dropColumn("total_complaints");
		table.dropColumn("total_substantiated_complaints");
	});
