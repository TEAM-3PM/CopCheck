/** @format */
import { UserReportCard } from "./UserReportCard";

export const UserReportList = ({ reports }) => {
  return (
    <div className="col-flex fill-width">
      <h3>Recent Reports</h3>
      <hr />
      {reports.length > 0 ? (
        reports?.map(
          (report) =>
            report.contents.length > 0 && (
              <UserReportCard
                key={report.id}
                report={report}
                user_id={report.user_id}
              />
            )
        )
      ) : (
        <p>No user reports found for this officer.</p>
      )}
    </div>
  );
};
