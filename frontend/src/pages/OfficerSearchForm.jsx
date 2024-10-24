/** @format */

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
	const [searchTerm, setSearchTerm] = useState("");
	const [searchHistory, setSearchHistory] = useState([]);

	const handleOfficerSearchType = e => {
		const value = e.target.value;
		setSearchBy(value);
		if (value === "badgeNumber") {
			setLastName("");
		} else {
			setBadgeNumber("");
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setError(null);
		setOfficerInfo(null);
		try {
			if (searchBy === "lastName") {
				const response = await fetchHandler(
					`/api/officers/search/last_name/${lastName}`
				);
				setSearchTerm(lastName);
				setOfficerInfo(response[0]);
			} else {
				const response = await fetchHandler(
					`/api/officers/search/badge_num/${badgeNumber}`
				);
				console.log(response);
				setSearchTerm(badgeNumber);
				setOfficerInfo(response[0]);
			}
		} catch (err) {
			setSearchTerm(badgeNumber || lastName);
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
						<select
							value={searchBy}
							onChange={handleOfficerSearchType}>
							<option value='lastName'>Last Name</option>
							<option value='badgeNumber'>Badge Number</option>
						</select>
					</label>
				</div>

				{searchBy === "lastName" ? (
					<div>
						<label>
							Last Name:
							<input
								type='text'
								value={lastName}
								onChange={e => setLastName(e.target.value)}
								required
							/>
						</label>
					</div>
				) : (
					<div>
						<label>
							Badge Number:
							<input
								type='text'
								value={badgeNumber}
								onChange={e => setBadgeNumber(e.target.value)}
								required
							/>
						</label>
					</div>
				)}
				<button type='submit'>Search</button>
			</form>
			{officerInfo && (
				<div>
					<h3>You Searched</h3>
					<p>'{searchTerm}'</p>
					<p>{officerInfo?.length} Results Found</p>
				</div>
			)}
			<section className='container'>
				{officerInfo?.map(foundCop => {
					return (
						<SearchResultsBar
							key={foundCop.id}
							officer={foundCop}
						/>
					);
				})}
			</section>

			{error && <p>{error}</p>}
		</div>
	);
};

export default OfficerSearchForm;
