/** @format */

export const PublicComplaintCard = ({ complaint }) => {
	return (
		<div
			className='col-flex'
			style={{
				color: "black",
				backgroundColor: "white",
				borderRadius: "10px",
			}}>
			<p>
				<strong>Rank at Incident:</strong> {complaint.officer_rank_at_incident}{" "}
				({complaint.officer_rank_abbreviation_at_incident})
			</p>
			<p>
				<strong>Command at Incident:</strong>{" "}
				{complaint.officer_command_at_incident}
			</p>
			<p>
				<strong>FADO Type:</strong> {complaint.fado_type}
			</p>
			<p>
				<strong>Allegation:</strong> {complaint.allegation}
			</p>
			<p>
				<strong>Victim's Age Range:</strong>{" "}
				{complaint.victim_allegedvictim_age_range_at_incident}
			</p>
			<p>
				<strong>Victim's Gender:</strong>{" "}
				{complaint.victim_allegedvictim_gender}
			</p>
			<p>
				<strong>Victim's Race:</strong>{" "}
				{complaint.victim_allegedvictim_race_legacy}
			</p>
			<p>
				<strong>CCRB Disposition:</strong>{" "}
				{complaint.ccrb_allegation_disposition}
			</p>
			<p>
				<strong>NYPD Disposition:</strong>{" "}
				{complaint.nypd_allegation_disposition}
			</p>
			<p>
				<strong>Investigator's Recommended Disposition:</strong>{" "}
				{complaint.investigator_recommended_allegation_disposition}
			</p>
		</div>
	);
};
