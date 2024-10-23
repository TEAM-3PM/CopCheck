import React, { useState } from "react";
import { fetchHandler } from "../utils/fetchingUtils";
import { useNavigate } from "react-router-dom";
import { SearchResultsBar } from "../components/SearchResultsCard";
const OfficerSearchForm = () => {
  const navigate = useNavigate();
  const [searchBy, setSearchBy] = useState("lastName");
  const [lastName, setLastName] = useState("");
  const [badgeNumber, setBadgeNumber] = useState("");
  const [officerInfo, setOfficerInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleOfficerSearchType = (e) => {
    const value = e.target.value;
    setSearchBy(value);
    if (value === "badgeNumber") {
      setLastName("");
    } else {
      setBadgeNumber("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setOfficerInfo(null);
    try {
      if (searchBy === "lastName") {
        const response = await fetchHandler(
          `/api/officers/search/last_name/${lastName}`
        );
        console.log(response);
        setOfficerInfo(response[0]);
      } else {
        const response = await fetchHandler(
          `/api/officers/search/badge_num/${badgeNumber}`
        );
        console.log(response);
        setOfficerInfo(response[0]);
      }
    } catch (err) {
      setError("Officer not found or error fetching data.");
    }
  };
  // try {
  //     const response = await fetchHandler.getPatchOptions('/api/officers', {
  //         params: {
  //             ...(searchBy === 'lastName' ? { lastName } : { badgeNumber })
  //         }
  //     });
  //     setOfficerInfo(response.data);
  // } catch (err) {
  //     setError('Officer not found or error fetching data.');
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Search By:
            <select value={searchBy} onChange={handleOfficerSearchType}>
              <option value="lastName">Last Name</option>
              <option value="badgeNumber">Badge Number</option>
            </select>
          </label>
        </div>

        {searchBy === "lastName" ? (
          <div>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>
        ) : (
          <div>
            <label>
              Badge Number:
              <input
                type="text"
                value={badgeNumber}
                onChange={(e) => setBadgeNumber(e.target.value)}
                required
              />
            </label>
          </div>
        )}
        <button type="submit">Search</button>
      </form>
      <h2>Search Results</h2>
      <section className="container">
        {officerInfo?.map((foundCop) => {
          return (
            <SearchResultsBar
              firstName={foundCop.first_name}
              lastName={foundCop.last_name}
              badgeNumber={foundCop.badge_num}
            />
          );
        })}
      </section>

      {officerInfo && (
        <div>
          <h3>Officer Information</h3>
          <p>Last Name: {officerInfo.last_name}</p>
          <p>First Name: {officerInfo.first_name}</p>
          <p>Badge Number: {officerInfo.badge_num}</p>
          <p>Information: {officerInfo.info}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default OfficerSearchForm;
