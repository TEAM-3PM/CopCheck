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

	// create(report_id, content, type, user_id);
	// every content should have ONE text content
	// you must correctly link both the report id and the user id
	await Content.create(1, "i hate this cop", "text", 1);

	await Content.create(2, "i hate this cop", "text", 1);

	await Content.create(3, "this cop sucks too", "text", 2);

	await Content.create(4, "this cop strip searched me", "text", 3);
};
