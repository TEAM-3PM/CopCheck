/** @format */

import UserIcon from "../Cop Check Assets/user_8742495.png";
import { Link } from "react-router-dom";

export const SearchResultsCard = ({ officer, precinct, searchOption }) => {
	return (
		<>
			<div className='card col-flex'>
				<img
					src={UserIcon}
					className='card__image'
					alt='User Icon'
				/>

				{officer && (
					<>
						<p className='card__name'>
							{officer.first_name} {officer.last_name}
						</p>

						<h3>Badge Number: {officer.badge_num}</h3>

						<Link to={`/officers/${officer.id}`}>
							<button className='btn draw-border'>View Profile</button>
						</Link>
						<Link
							to={`/complaint`}
							state={{ startOfficer: officer.id }}>
							<button className='btn draw-border'>File A Report</button>
						</Link>
					</>
				)}
			</div>
		</>
	);
};
