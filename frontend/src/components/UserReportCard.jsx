/** @format */
import React from "react";
import VideoPlayer from "../components/cloudinary/VideoPlayer";
import CommentSection from "../components/CommentSection"; // Import CommentSection

export const UserReportCard = ({ report }) => {
	// doing this to avoid having to do report.contents a bajillion times
	const reportContents = report.contents;
	// doing this to guarantee that the text content is first
	const textContent = reportContents.find(content => content.type === "text");

	return (
		<div style={{ padding: "5px", border: "solid", borderRight: "none" }}>
			<p>{textContent?.content}</p>

			{reportContents.map(content => {
				// this map will skip over the text content
				if (content.type === "image")
					return (
						<img
							key={content.id}
							src={content.content}
							alt='Report content'
						/>
					);
				if (content.type === "video")
					return (
						<VideoPlayer
							key={content.id}
							publicID={content.content}
							width={640}
							height={720}
						/>
					);
			})}

			{/* Add CommentSection for this specific report */}
			<CommentSection comments={report.comments} />
		</div>
	);
};
