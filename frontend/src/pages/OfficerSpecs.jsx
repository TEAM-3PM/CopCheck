import React, { useState, useEffect } from "react";
import { fetchHandler } from "../utils/fetchingUtils";
import VideoPlayer from "../components/cloudinary/VideoPlayer";
import { useParams } from "react-router-dom";

const OfficerSpecs = () => {
    const { officerId } = useParams();
    const [officer, setOfficer] = useState(null);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // const fetchOfficer = async () => {
        //     try {
        //         const [data, error] = await fetchHandler(`/api/officers/${officerId}`);
        //         if (data) {
        //             setOfficer(data);
        //         } else {
        //             console.error("Error fetching officer:", error);
        //         }
        //     } catch (error) {
        //         console.error("Error fetching officer:", error);
        //     }
        // };

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

        // fetchOfficer();
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
                        <p>No reports found for this officer.</p>
                        // 
                    )}
                </div>
            ) : (
                <p>Loading officer details...</p>
            )}
        </div>
    );
};

export default OfficerSpecs;
