/** @format */

import UserIcon from "../Cop Check Assets/user_8742495.png";
import { Link } from "react-router-dom";

export const SearchResultsCard = ({ officer }) => {
	return (
		<>
			<div className='card'>
				<img
					src={UserIcon}
					className='card__image'
				/>
				<p className='card__name'>
					{officer.first_name} {officer.last_name}
				</p>
				<div className='grid-container'>
					<h3 className='grid-child-posts'>
						Badge Number: {officer.badge_num}
					</h3>
				</div>

				<Link to={`/officers/${officer.id}`}>
					<button className='btn draw-border'>View Profile</button>
				</Link>
				<Link to={`/complaint`}>
					<button className='btn draw-border'>File A Report</button>
				</Link>
			</div>
		</>
	);
};
