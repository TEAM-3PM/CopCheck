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

	return (
		<form
			aria-label='Search Bar'
			onSubmit={handleSubmit}>
			<input
				type='text'
				value={query}
				required
			/>
			<select
				name='searchOptions'
				value={searchOption}></select>
			<button type='submit'></button>
		</form>
	);
};
