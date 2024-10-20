//copy user model
//link controller up
const knex = require("../db/knex");

class PublicComplaints {
  static async list() {
    const query = `SELECT * FROM public_complaints`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new PublicComplaints(rawUserData));
  }

  static async find(id) {
    const query = `SELECT * FROM public_complaints WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawPublicData = result.rows[0];
    return rawPublicData ? new PublicComplaints(rawPublicData) : null;
  }

  static async create(
    as_of_date,
    complaint_id,
    complaint_officer_number,
    tax_id,
    officer_rank_abbreviation_at_incident,
    officer_rank_at_incident,
    officer_command_at_incident,
    officer_days_on_force_at_incident,
    allegation_record_identity,
    fado_type,
    allegation,
    victim_allegedvictim_age_range_at_incident,
    victim_allegedvictim_gender,
    victim_allegedvictim_race_legacy,
    victim_alleged_victim_race_ethnicity,
    ccrb_allegation_disposition,
    nypd_allegation_disposition,
    investigator_recommended_allegation_disposition
  ) {
    const query = `INSERT INTO public_complaints (
    as_of_date,
    complaint_id,
    complaint_officer_number,
    tax_id,
    officer_rank_abbreviation_at_incident,
    officer_rank_at_incident,
    officer_command_at_incident,
    officer_days_on_force_at_incident,
    allegation_record_identity,
    fado_type,
    allegation,
    victim_allegedvictim_age_range_at_incident,
    victim_allegedvictim_gender,
    victim_allegedvictim_race_legacy,
    victim_alleged_victim_race_ethnicity,
    ccrb_allegation_disposition,
    nypd_allegation_disposition,
    investigator_recommended_allegation_disposition )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING *`;
    const result = await knex.raw(query, [
      as_of_date,
      complaint_id,
      complaint_officer_number,
      tax_id,
      officer_rank_abbreviation_at_incident,
      officer_rank_at_incident,
      officer_command_at_incident,
      officer_days_on_force_at_incident,
      allegation_record_identity,
      fado_type,
      allegation,
      victim_allegedvictim_age_range_at_incident,
      victim_allegedvictim_gender,
      victim_allegedvictim_race_legacy,
      victim_alleged_victim_race_ethnicity,
      ccrb_allegation_disposition,
      nypd_allegation_disposition,
      investigator_recommended_allegation_disposition,
    ]);
    const rawUserData = result.rows[0];
    return new PublicComplaints(rawUserData);
  }

  // Updates the user that matches the given id with a new username.
  // Returns the modified user, using the constructor to hide the passwordHash.

  static async deleteAll() {
    return knex("public_reports").del();
  }
}

module.exports = PublicComplaints;
