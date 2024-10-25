/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.raw("ALTER TABLE contents ALTER COLUMN content TYPE varchar(4000);");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) =>
  knex.raw("ALTER TABLE contents ALTER COLUMN content TYPE text");
