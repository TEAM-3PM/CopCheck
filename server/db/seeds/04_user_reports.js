/** @format */

const UserReport = require("../../models/UserReport");

/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_reports").del();

  await knex.raw("ALTER SEQUENCE user_reports_id_seq RESTART WITH 1");

  // create(id, user_id, officer_id);
  await UserReport.create(1, 1);
  await UserReport.create(1, 2);
  await UserReport.create(2, 2);
  await UserReport.create(3, 4);
};
