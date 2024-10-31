import { PublicComplaintCard } from "../components/PublicComplaintCard";

export const PublicComplaintList = ({ officer }) => {
  return (
    <div className="col-flex fill-width">
      <h3>Public Data</h3>
      <hr />
      {officer?.publicComplaints?.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Rank at Incident</th>
              <th>Command at Incident</th>
              <th>FADO Type</th>
              <th>Allegation</th>
              <th>Victim's Age Range</th>
              <th>Victim's Gender</th>
              <th>Victim's Race</th>
              <th>CCRB Disposition</th>
              <th>NYPD Disposition</th>
              <th>Investigator's Recommended Disposition</th>
            </tr>
          </thead>
          <tbody>
            {officer.publicComplaints.map((complaint, index) => (
              <PublicComplaintCard
                key={complaint.id}
                complaint={complaint}
                rowIndex={index} // Pass index for alternating color
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No public complaints found for this officer.</p>
      )}
    </div>
  );
};
