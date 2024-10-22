/** @format */

const Precinct = require("../models/Precincts");
const Officer = require("../models/Officer");

exports.resultsPrecinctByQuery = async (req, res) => {
	const { query } = this.requestData(req);

	try {
		let precincts = await Precinct.findByName(query);
		// try another search
		if (precincts.length === 0) precincts = await Precinct.findByAddress(query);
		// if no precincts are found still, send a 404
		if (precincts.length === 0) return res.sendStatus(404);

		// adding the officers associated with each precinct as a property
		await Promise.all(
			precincts.map(
				async precinct =>
					(precinct.officers = await Officer.findByPrecinct(precinct.id))
			)
		);

		res.status(200).send(precincts);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error retrieving precinct data");
	}
};

exports.requestData = req => {
	const { query } = req.params;

	return { query };
};
