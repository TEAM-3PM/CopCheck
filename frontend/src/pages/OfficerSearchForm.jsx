/** @format */

import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchResultsCard } from "../components/SearchResultsCard";

const OfficerSearchForm = () => {
	const location = useLocation();
	const { searchResults, query, searchOption } = location.state || {};
	const [officerInfo, setOfficerInfo] = useState([]);

	const resultNum =
		searchOption !== "precinct"
			? officerInfo?.length
			: officerInfo?.filter(precinct => precinct?.officers?.length > 0)?.length;

	useEffect(() => {
		if (searchResults) {
			setOfficerInfo(searchResults);
		} else {
			setOfficerInfo([]);
		}
	}, [searchResults]);

	return (
		<div>
			<h3>
				Results for: "<span style={{ color: "yellow" }}>{query}</span>"
			</h3>
			<p>
				{resultNum}
				{searchOption === "precinct" ? " Precinct " : " "}Result
				{resultNum === 1 ? "" : "s"} Found
			</p>

			<section
				className='container'
				style={{ height: "fit-content", justifyContent: "flex-start" }}>
				{searchOption === "precinct" ? (
					officerInfo.length > 0 ? (
						<div className='col-flex fill-width'>
							{officerInfo.map(precinct =>
								precinct?.officers?.length > 0 ? (
									<div
										className='col-flex'
										key={precinct.id}
										style={{ padding: "5px" }}>
										<h3
											className='card__name'
											style={{ color: "dodgerblue" }}>
											{precinct.name}{" "}
										</h3>
										<div className='grid-container'>
											<p className='grid-child-posts'>
												Borough: {precinct.borough}
											</p>
											<p className='grid-child-posts'>
												Address: {precinct.address}
											</p>
										</div>
										<hr
											style={{
												borderStyle: "dashed",
												borderWidth: "3px 0px 0px 0px",
												borderColor: "darkslategrey",
											}}
										/>
										<div
											className='row-flex'
											style={{
												justifyContent: "flex-start",
												flexWrap: "wrap",
											}}>
											{precinct.officers.map(officer => (
												<SearchResultsCard
													key={officer.id}
													officer={officer}
												/>
											))}
										</div>
										<hr
											style={{
												borderStyle: "solid",
												borderWidth: "2px 0px 0px 0px",
												borderColor: "white",
											}}
										/>
									</div>
								) : null
							)}
						</div>
					) : (
						<p>No results found.</p>
					)
				) : officerInfo.length > 0 ? (
					officerInfo.map(officer => (
						<SearchResultsCard
							key={officer.id}
							officer={officer}
						/>
					))
				) : (
					<p>No results found.</p>
				)}
			</section>
		</div>
	);
};

export default OfficerSearchForm;

// map over precincts
// map over officer properties in each precinct
