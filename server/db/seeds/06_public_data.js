const PublicComplaints = require("../../models/PublicComplaint");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw("ALTER SEQUENCE contents_id_seq RESTART WITH 1");


};
