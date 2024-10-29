/** @format */

import React, { useState, useEffect } from "react";
import { fetchHandler } from "../utils/fetchingUtils";
import { useParams } from "react-router-dom";
import { PublicComplaintList } from "../components/PublicComplaintList";
import { UserReportList } from "../components/UserReportList";

const OfficerSpecs = () => {
  const { officerId } = useParams();
  const [officer, setOfficer] = useState({});
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchOfficer = async () => {
      try {
        const [data, error] = await fetchHandler(
          `/api/officers/${officerId}/complaints/reports`
        );
        if (data && data?.reports) {
          setOfficer(data);
          setReports(data.reports);
          // console.log(data);
        }
      } catch (error) {
        console.error("Error fetching officer:", error);
      }
    };
    fetchOfficer();
  }, [officerId]);

  return (
    <div className="col-flex">
      <h1>
        Officer: {officer?.first_name} {officer?.last_name}
      </h1>
      <p>Badge Number: {officer?.badge_num}</p>
      <div
        className="row-flex fill-width"
        style={{ justifyContent: "space-between", alignItems: "start" }}
      >
        <PublicComplaintList officer={officer} />
        <div id="userList">
          {" "}
          <UserReportList reports={reports} />
        </div>
      </div>
    </div>
  );
};

export default OfficerSpecs;
