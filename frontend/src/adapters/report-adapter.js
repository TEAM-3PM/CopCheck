import { fetchHandler, getPatchOptions, getPostOptions } from "../utils/fetchingUtils";

const reportBaseUrl = '/api/reports';

export const createReport = async ({ officer_id, user_id }) => {
    return await fetchHandler(reportBaseUrl, getPostOptions({ officer_id, user_id }))
};

export const getAllReports = async () => {
    const [reports, error] = await fetchHandler(reportBaseUrl);
    if (error) console.log(error);
    return reports || [];
};

export const getReport = async (reportId) => {
    return await fetchHandler(`${reportBaseUrl}/${reportId}`)
};

export const updateReport = async ({ reportId, report }) => {
    return await fetchHandler(`${reportBaseUrl / { reportId }}`, getPatchOptions({ reportId, report }))
};