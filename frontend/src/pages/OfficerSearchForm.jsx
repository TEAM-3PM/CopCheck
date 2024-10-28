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
	console.log(officerInfo)
	return (
		<div>

			<h3>Search Results for '{query}'</h3>
			<p>{officerInfo.length} Results Found</p>

			<section className='container'>

				{searchOption === "precinct" ? officerInfo.length > 0 ? (
					officerInfo.map((precinct) => (
						precinct.officers.length > 0 ? (
							<div key={precinct.id}>
								<p className='card__name'>{precinct.name}</p>
								<div className='grid-container'>
									<h3 className='grid-child-posts'>Borough: {precinct.borough}</h3>
									<h3 className='grid-child-posts'>Address: {precinct.address}</h3>
								</div>
								{precinct.officers.map((officer) =>
									<SearchResultsCard key={officer.id} officer={officer} />
								)}
							</div>) : <></>
					))

				) : (
					<p>No results found.</p>
				) : officerInfo.length > 0 ? (
					officerInfo.map((officer) => (
						<SearchResultsCard key={officer.id} officer={officer} />
					))
				) : (
					<p>No results found.</p>
				)
				}
			</section>
		</div>
	);
};

export default OfficerSearchForm;


// map over precincts 
// map over officer properties in each precinct