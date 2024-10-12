/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema
    .alterTable("users", (table) => {
      table.increments("id").primary();
      table.string("username").unique();
      table.string("full_name");
      table.string("password_hash");
      table.string("email");
      table.integer("age");
      table.string("race");
      table.string("gender");
    })
    .createTable("users_reports", (table) => {
      table.increments("id").primary();
      table.integer("user_id");
      table.string("officer_id");
      table.timestamps(true, true);
    })
    .createTable("comments", (table) => {
      table.increments("id").primary();
      table.integer("user_id");
      table.string("report_id");
      table.string("text");
      table.timestamps(true, true);
    })
    .createTable("contents", (table) => {
      table.increments("id").primary();
      table.string("report_id");
      table.string("content");
      table.string("type");
      table.timestamps(true, true);
    })
    .createTable("officers", (table) => {
      table.increments("id").primary();
      table.integer("tax_id");
      table.string("precinct_id");
      table.string("first_name");
      table.string("last_name");
      table.integer("badge_num");
      table.timestamps(true, true);
      table.string("active_duty");
    })
    .createTable("precincts", (table) => {
      table.increments("id").primary();
      table.text("borough");
    })
    .createTable("public_data", (table) => {
      table.increments("id").primary();
      table.string("as_of_date").unique();
      table.string("complaint_id");
      table.string("complaint_officer_number");
      table.string("tax_id");
      table.string("officer_rank_abbreviation_at_incident");
      table.string("officer_rank_at_incident");
      table.string("officer_command_at_incident");
      table.string("officer_days_on_force_at_incident");
      table.string("allegation_record_identity");
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
exports.down = (knex) =>
  knex.schema
    .dropTable("users")
    .dropTable("user_reports")
    .dropTable("comments")
    .dropTable("contents")
    .dropTable("officers")
    .dropTable("precincts")
    .dropTable("users")
    .dropTable("public_data");
