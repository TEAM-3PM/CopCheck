/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchHandler } from "../utils/fetchingUtils";

export const SearchBar = ({ optionStart }) => {
	const [query, setQuery] = useState("");
	const [searchOption, setSearchOption] = useState(optionStart ?? "name");

	const handleSubmit = async e => {
		e.preventDefault();
		console.log("submitted!");

		try {
		} catch (error) {}
	};

	const handleChange = e => {
		const { name, value } = e.target;
		if (name === "query") setQuery(value);
		if (name === "searchOptions") setSearchOption(value);
	};

	return (
		<form
			aria-label='Search Bar'
			onSubmit={handleSubmit}>
			<input
				type='text'
				name='query'
				value={query}
				onChange={handleChange}
				required
			/>
			<select
				name='searchOptions'
				value={searchOption}
				onChange={handleChange}>
				<option value='name'>Last Name</option>
				<option value='badge'>Badge No.</option>
				<option value='precinct'>Precinct</option>
			</select>
			<button type='submit'>Search</button>
		</form>
	);
};
