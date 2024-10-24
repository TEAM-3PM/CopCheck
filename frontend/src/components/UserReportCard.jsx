/** @format */
import VideoPlayer from "../components/cloudinary/VideoPlayer";

export const UserReportCard = ({ report }) => {
	return (
		<>
			{report.type === "text" && <p>{report.content}</p>}
			{report.type === "image" && (
				<img
					src={report.content}
					alt='Report content'
				/>
			)}
			{report.type === "video" && (
				<VideoPlayer
					width={640}
					height={720}
					publicID={report.content}
				/>
			)}
		</>
	);
};
