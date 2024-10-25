/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const Comments = require("../../models/Comments");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  await knex.raw("ALTER SEQUENCE comments_id_seq RESTART WITH 1");

  await Comments.create(1, 1, "hello");
};
