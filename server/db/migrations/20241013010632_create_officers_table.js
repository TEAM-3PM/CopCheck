/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex => {
	return knex.schema.createTable("officers", table => {
		table.increments("id").primary();
		table.integer("tax_id").notNullable();
		table.integer("precinct_id").notNullable();
		table.foreign("precinct_id").references("id").inTable("precincts");
		table.string("first_name").notNullable();
		table.string("last_name").notNullable();
		table.integer("badge_num").notNullable();
		table.timestamps(true, true);
		table.boolean("active_duty").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("officers");
