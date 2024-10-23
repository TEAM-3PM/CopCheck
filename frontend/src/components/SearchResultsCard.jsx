import UserIcon from "../Cop Check Assets/user_8742495.png";
import { useNavigate } from "react-router-dom";
export const SearchResultsBar = ({ firstName, lastName, badgeNumber }) => {
  return (
    <>
      <div className="card">
        <img src={UserIcon} className="card__image" />
        <p className="card__name">
          {firstName} {lastName}
        </p>
        <div className="grid-container">
          <h3 className="grid-child-posts">Badge Number: {badgeNumber}</h3>
        </div>

        <button className="btn draw-border">View Profile</button>
        <button className="btn draw-border">File A Report</button>
      </div>
    </>
  );
};
