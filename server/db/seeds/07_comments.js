/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const Comments = require("../../models/Comments");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  await knex.raw("ALTER SEQUENCE comments_id_seq RESTART WITH 1");

  await Comments.create(2, 1, "I'm sorry you had to go through this. Were there any witnesses or any further interactions after they pulled you out?");
  await Comments.create(1, 2, "That sounds terrifying. Have you considered filing a formal complaint or seeking legal advice? It’s important they’re held accountable for this kind of behavior.");
};
