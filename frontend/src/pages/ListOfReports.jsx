/** @format */

import React, { useState, useEffect } from "react";
import { fetchHandler } from "../utils/fetchingUtils";
import VideoPlayer from "../components/cloudinary/VideoPlayer";
import { UserReportList } from "../components/UserReportList";

const ListOfReports = () => {
  const [reports, setReports] = useState([]); // State to store the reports

  // Fetch reports and officers when the component mounts
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const [data, error] = await fetchHandler("/api/reports");
        setReports(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div id="feed">
      <UserReportList reports={reports} />
    </div>
  );
};

export default ListOfReports;
