/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = knex => {
	return knex.schema.createTable("public_data", table => {
		table.increments("id").primary();
		table.string("as_of_date");
		table.integer("complaint_id");
		table.integer("complaint_officer_number");
		table.integer("tax_id");
		table.string("officer_rank_abbreviation_at_incident");
		table.string("officer_rank_at_incident");
		table.string("officer_command_at_incident");
		table.integer("officer_days_on_force_at_incident");
		table.integer("allegation_record_identity");
		table.string("fado_type");
		table.string("allegation");
		table.string("victim_allegedvictim_age_range_at_incident");
		table.string("victim_allegedvictim_gender");
		table.string("victim_allegedvictim_race_legacy");
		table.string("victim_alleged_victim_race_ethnicity");
		table.string("ccrb_allegation_disposition");
		table.string("nypd_allegation_disposition");
		table.string("investigator_recommended_allegation_disposition");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("public_data");
