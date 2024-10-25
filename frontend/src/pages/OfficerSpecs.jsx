/** @format */

import React, { useState, useEffect } from "react";
import { fetchHandler } from "../utils/fetchingUtils";
import { useParams } from "react-router-dom";
import { PublicComplaintList } from "../components/PublicComplaintList";
import { UserReportList } from "../components/UserReportList";

const OfficerSpecs = () => {
	const { officerId } = useParams();
	const [officer, setOfficer] = useState(null);
	const [reports, setReports] = useState([]);

	useEffect(() => {
		const fetchOfficer = async () => {
			try {
				const [data, error] = await fetchHandler(
					`/api/officers/${officerId}/complaints`
				);
				if (data) {
					setOfficer(data);
				} else {
					console.error("Error fetching officer:", error);
				}
			} catch (error) {
				console.error("Error fetching officer:", error);
			}
		};

		const fetchPublicComplaints = async () => {
			try {
			} catch (error) {}
		};

		const fetchReports = async () => {
			try {
				const [data, error] = await fetchHandler(
					`/api/reports/officer/${officerId}`
				);
				if (data) {
					setReports(data);
				} else {
					console.error("Error fetching reports:", error);
				}
			} catch (error) {
				console.error("Error fetching reports:", error);
			}
		};
		fetchPublicComplaints();
		fetchOfficer();
		fetchReports();
	}, [officerId]);

	return (
		<div className='col-flex'>
			<h1>
				Officer: {officer?.first_name} {officer?.last_name}
			</h1>
			<p>Badge Number: {officer?.badge_num}</p>
			<div
				className='row-flex fill-width'
				style={{ justifyContent: "space-between", alignItems: "start" }}>
				<PublicComplaintList officer={officer} />

				<UserReportList reports={reports} />
			</div>
		</div>
	);
};

export default OfficerSpecs;
