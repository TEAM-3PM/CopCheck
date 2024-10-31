export const PublicComplaintCard = ({ complaint, rowIndex }) => {
  const backgroundColor = rowIndex % 2 === 0 ? "black" : "grey"; // Alternating colors

  return (
    <tr style={{ backgroundColor }}>
      <td>
        {complaint.officer_rank_at_incident} (
        {complaint.officer_rank_abbreviation_at_incident})
      </td>
      <td>{complaint.officer_command_at_incident}</td>
      <td>{complaint.fado_type}</td>
      <td>{complaint.allegation}</td>
      <td>{complaint.victim_allegedvictim_age_range_at_incident}</td>
      <td>{complaint.victim_allegedvictim_gender}</td>
      <td>{complaint.victim_allegedvictim_race_legacy}</td>
      <td>{complaint.ccrb_allegation_disposition}</td>
      <td>{complaint.nypd_allegation_disposition}</td>
      <td>{complaint.investigator_recommended_allegation_disposition}</td>
    </tr>
  );
};
