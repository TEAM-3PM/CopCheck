/** @format */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("precincts").del();

  await knex.raw("ALTER SEQUENCE precincts_id_seq RESTART WITH 1");

  await knex("precincts").insert([
    { borough: `fake`, name: "fake", address: "fake" },
    { borough: `fake`, name: "fake", address: "fake" },
    { borough: `fake`, name: "fake", address: "fake" },
  ]);
};
