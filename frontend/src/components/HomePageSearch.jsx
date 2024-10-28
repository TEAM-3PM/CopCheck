import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchHandler } from "../utils/fetchingUtils";

export const HomePageSearchBar = ({ optionStart }) => {
  const [query1, setQuery1] = useState("");
  const [searchOption1, setSearchOption1] = useState(optionStart ?? "name");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoints = {
      name: `/api/officers/search/last_name/${query1}`,
      badge: `/api/officers/search/badge_num/${query1}`,
      precinct: `/api/officers/search/precinct/${query1}`,
    };

    const apiEndpoint = endpoints[searchOption1];

    if (apiEndpoint) {
      try {
        const [data, error] = await fetchHandler(apiEndpoint);
        if (data) {
          navigate("/officer-search", {
            state: { searchResults: data, query1, searchOption1 },
          });
        } else {
          console.log("No results found", error);
        }
      } catch (error) {
        console.log("Error with search bar:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "query1") setQuery1(value);
    if (name === "searchOption1s") setSearchOption1(value);
  };

  return (
    <form
      id="search-bar1"
      className="row-flex fill-width no-border"
      aria-label="Search Bar"
      onSubmit={handleSubmit}
      style={{ height: "65px" }}
    >
      <input
        id="text-box1"
        type="text"
        name="query1"
        value={query1}
        onChange={handleChange}
        className="fill-height"
        style={{ borderRadius: "20px 0px 0px 20px", borderRightWidth: "0px" }}
      />
      <select
        id="dropdown1"
        name="searchOption1s"
        value={searchOption1}
        onChange={handleChange}
        className="fill-height"
        style={{ borderRightWidth: "1px", borderLeftWidth: "1px" }}
      >
        <option value="name">Last Name</option>
        <option value="badge">Badge No.</option>
        <option value="precinct">Precinct</option>
      </select>
      <button
        id="search-button1"
        type="submit"
        className="fill-height"
        disabled={
          searchOption1 === "badge"
            ? /^([^0-9]*)$/.test(query1) || query1.length < 4
            : query1.length < 2
        }
        style={{
          borderRadius: "0px 20px 20px 0px",
          borderLeftWidth: "0px",
        }}
      >
        Search
      </button>
    </form>
  );
};
