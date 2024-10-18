/** @format */

import {
	fetchHandler,
	getPatchOptions,
	getPostOptions,
} from "../utils/fetchingUtils";

export const createReport = async ({ officer_id, contents }) => {
	return await fetchHandler(
		"/api/reports",
		getPostOptions({ officer_id, contents })
	);
};

export const getAllReports = async () => {
	const [reports, error] = await fetchHandler(___);
	if (error) console.log(error);
	return reports || [];
};

export const getReport = async reportId => {
	return await fetchHandler(`${___}/${reportId}`);
};

export const updateReport = async ({ reportId, report }) => {
	return await fetchHandler(
		`${___ / { reportId }}`,
		getPatchOptions({ reportId, report })
	);
};
