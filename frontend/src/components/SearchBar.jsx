/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchHandler } from "../utils/fetchingUtils";

export const SearchBar = ({ optionStart }) => {
	const [query, setQuery] = useState("");
	const [searchOption, setSearchOption] = useState(optionStart ?? "name");
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		// dunno if we need this yet

		// let queryParam = "";
		// switch (searchOption) {
		// 	case "name":
		// 		queryParam = "";
		// 		break;
		// 	case "badge":
		// 		queryParam = "";
		// 		break;
		// 	case "precinct":
		// 		queryParam = "";
		// 		break;
		// }

		try {
			// navigate(``)
		} catch (error) {
			console.log(`Error with search bar`, error);
		}
	};

	const handleChange = e => {
		const { name, value } = e.target;
		if (name === "query") setQuery(value);
		if (name === "searchOptions") setSearchOption(value);
	};

	return (
		<form
			id='search-bar'
			className='row-flex fill-width no-border'
			aria-label='Search Bar'
			onSubmit={handleSubmit}
			style={{ height: "65px" }}>
			<input
				type='text'
				name='query'
				value={query}
				onChange={handleChange}
				className='fill-height'
				style={{ borderRadius: "20px 0px 0px 20px", borderRightWidth: "0px" }}
			/>
			<select
				name='searchOptions'
				value={searchOption}
				onChange={handleChange}
				className='fill-height'
				style={{ borderRightWidth: "1px", borderLeftWidth: "1px" }}>
				<option value='name'>Last Name</option>
				<option value='badge'>Badge No.</option>
				<option value='precinct'>Precinct</option>
			</select>
			<button
				type='submit'
				className='fill-height'
				disabled={
					searchOption === "badge"
						? /^([^0-9]*)$/.test(query) || query.length < 4
						: query.length < 2
				}
				style={{
					borderRadius: "0px 20px 20px 0px",
					borderLeftWidth: "0px",
				}}>
				Search
			</button>
		</form>
	);
};
