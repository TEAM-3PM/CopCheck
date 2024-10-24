/** @format */
import { PublicComplaintCard } from "../components/PublicComplaintCard";

export const PublicComplaintList = ({ officer }) => {
	return (
		<div className='col-flex fill-width'>
			<h3>Public Data</h3>
			<hr />
			{officer?.publicComplaints?.length > 0 ? (
				officer?.publicComplaints?.map(complaint => (
					<PublicComplaintCard
						key={complaint.id}
						complaint={complaint}
					/>
				))
			) : (
				<p>No public complaints found for this officer.</p>
			)}
		</div>
	);
};
