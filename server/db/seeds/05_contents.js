/** @format */

const Content = require("../../models/Content");

/**
 * @format
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("contents").del();

	await knex.raw("ALTER SEQUENCE contents_id_seq RESTART WITH 1");

	// create(officer_id, content, type);
	await Content.create(1, "i hate this cop", "text");
	await Content.create(1, "i hate this cop", "text");
	await Content.create(2, "this cop sucks too", "text");
	await Content.create(3, "this cop strip searched me", "text");
};
