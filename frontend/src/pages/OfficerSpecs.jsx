import React, { useState, useEffect } from "react";
import { fetchHandler } from "../utils/fetchingUtils";
import VideoPlayer from "../components/cloudinary/VideoPlayer";
import { useParams } from "react-router-dom";

const OfficerSpecs = () => {
    const { officerId } = useParams();
    const [officer, setOfficer] = useState(null);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchOfficer = async () => {
            try {
                const [data, error] = await fetchHandler(`/api/officers/${officerId}/complaints`);
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

            } catch (error) {

            }
        }

        const fetchReports = async () => {
            try {
                const [data, error] = await fetchHandler(`/api/reports/officer/${officerId}`);
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
        <div>
            {officer ? (
                <div>
                    <h1>
                        Officer: {officer.first_name} {officer.last_name}
                    </h1>
                    <p>Badge Number: {officer.badge_number}</p>

                    <h3>Recent Reports on {officer.last_name}, {officer.first_name}</h3>
                    {reports.length > 0 ? (
                        reports.map((report) => (
                            <div key={report.content_id}>
                                {report.type === "text" && <p>{report.content}</p>}
                                {report.type === "image" && (
                                    <img src={report.content} alt="Report content" />
                                )}
                                {report.type === "video" && (
                                    <VideoPlayer
                                        width={640}
                                        height={720}
                                        publicID={report.content}
                                    />
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No user reports found for this officer.</p>
                    )}

                    {/* Public Complaints Section */}
                    <h3>Public Complaints on {officer.last_name}, {officer.first_name}</h3>
                    {officer.publicComplaints.length > 0 ? (
                        officer.publicComplaints.map((complaint) => (
                            <div key={complaint.id} className="complaint-details">
                                <p><strong>Rank at Incident:</strong> {complaint.officer_rank_at_incident} ({complaint.officer_rank_abbreviation_at_incident})</p>
                                <p><strong>Command at Incident:</strong> {complaint.officer_command_at_incident}</p>
                                <p><strong>FADO Type:</strong> {complaint.fado_type}</p>
                                <p><strong>Allegation:</strong> {complaint.allegation}</p>
                                <p><strong>Victim's Age Range:</strong> {complaint.victim_allegedvictim_age_range_at_incident}</p>
                                <p><strong>Victim's Gender:</strong> {complaint.victim_allegedvictim_gender}</p>
                                <p><strong>Victim's Race:</strong> {complaint.victim_allegedvictim_race_legacy}</p>
                                <p><strong>CCRB Disposition:</strong> {complaint.ccrb_allegation_disposition}</p>
                                <p><strong>NYPD Disposition:</strong> {complaint.nypd_allegation_disposition}</p>
                                <p><strong>Investigator's Recommended Disposition:</strong> {complaint.investigator_recommended_allegation_disposition}</p>
                            </div>
                        ))
                    ) : (
                        <p>No public complaints found for this officer.</p>
                    )}
                </div>
            ) : (
                <p>Loading officer details...</p>
            )}
        </div>
    );
};

export default OfficerSpecs;


