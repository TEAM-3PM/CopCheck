/** @format */
import { UserReportCard } from "./UserReportCard";

export const UserReportList = ({ reports }) => {
	return (
		<div className='col-flex fill-width'>
			<h3>Recent Reports</h3>
			{reports.length > 0 ? (
				reports.map(report => (
					<UserReportCard
						key={report.content_id}
						report={report}
					/>
				))
			) : (
				<p>No user reports found for this officer.</p>
			)}
		</div>
	);
};
