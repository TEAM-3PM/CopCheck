import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchResultsCard } from "../components/SearchResultsCard";

const OfficerSearchForm = () => {
	const location = useLocation();
	const { searchResults, query, searchOption } = location.state || {};
	const [officerInfo, setOfficerInfo] = useState([]);

	useEffect(() => {
		if (searchResults) {
			setOfficerInfo(searchResults);
		} else {
			setOfficerInfo([]);
		}
	}, [searchResults]);

	return (
		<div>
			<h3>Search Results for '{query}</h3>
			<p>{officerInfo.length} Results Found</p>

			<section className='container'>
				{officerInfo.length > 0 ? (
					officerInfo.map((officer) => (
						<SearchResultsCard key={officer.id} officer={officer} />
					))
				) : (
					<p>No results found.</p>
				)}
			</section>
		</div>
	);
};

export default OfficerSearchForm;
