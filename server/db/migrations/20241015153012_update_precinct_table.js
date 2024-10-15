/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex =>
	knex.schema.alterTable("precincts", table => {
		table.string("name").notNullable();
		table.string("address").notNullable();
	});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex =>
	knex.schema.alterTable("precincts", table => {
		table.dropColumn("name");
		table.dropColumn("address");
	});
