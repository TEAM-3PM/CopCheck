/** @format */

const { isAuthorized } = require("../utils/auth-utils");
const User = require("../models/User");

exports.createUser = async (req, res) => {
	const { username, password } = req.body;

	// TODO: check if username is taken, and if it is what should you return?
	const user = await User.create(username, password);
	// error goes through here
	/** Fix:
	 * Deconstruct the needed values from the fetch request's body
	 * Pass those values into User.create() in the correct order
	 */
	req.session.userId = user.id;

	res.send(user);
};

exports.listUsers = async (req, res) => {
	const users = await User.list();
	res.send(users);
};

exports.showUser = async (req, res) => {
	const { id } = req.params;

	const user = await User.find(id);
	if (!user) return res.sendStatus(404);

	res.send(user);
};

exports.updateUser = async (req, res) => {
	const { username } = req.body;
	const { id } = req.params;

	// Not only do users need to be logged in to update a user, they
	// need to be authorized to perform this action for this particular
	// user (users should only be able to change their own profiles)
	if (!isAuthorized(id, req.session)) return res.sendStatus(403);

	const updatedUser = await User.update(id, username);
	if (!updatedUser) return res.sendStatus(404);
	res.send(updatedUser);
};
