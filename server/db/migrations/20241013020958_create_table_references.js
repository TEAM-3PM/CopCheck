/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex =>
	knex.schema
		.alterTable("user_reports", table => {
			table.foreign("user_id").references("id").inTable("users");
			table.foreign("officer_id").references("id").inTable("officers");
		})
		.alterTable("comments", table => {
			table.foreign("user_id").references("id").inTable("users");
			table.foreign("report_id").references("id").inTable("user_reports");
		})
		.alterTable("contents", table => {
			table.foreign("report_id").references("id").inTable("user_reports");
		})
		.alterTable("officers", table => {
			table.foreign("precinct_id").references("id").inTable("precincts");
		})
		.alterTable("public_data", table => {
			table.foreign("tax_id").references("tax_id").inTable("officers");
		});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex =>
	knex.schema
		.alterTable("user_reports", table => {
			table.dropForeign("user_id");
			table.dropForeign("officer_id");
		})
		.alterTable("comments", table => {
			table.dropForeign("user_id");
			table.dropForeign("report_id");
		})
		.alterTable("contents", table => {
			table.dropForeign("report_id");
		})
		.alterTable("officers", table => {
			table.dropForeign("precinct_id");
		})
		.alterTable("public_data", table => {
			table.dropForeign("tax_id");
		});
