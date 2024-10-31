/** @format */
import React from "react";
import VideoPlayer from "../components/cloudinary/VideoPlayer";
import { limitCharacters } from "./functions/limitCharacters";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchingUtils";
// import "react-accessible-accordion/dist/fancy-example.css";
import CommentSection from "../components/CommentSection"; // Import CommentSection

export const UserReportCard = ({ report }) => {
	// doing this to avoid having to do report.contents a bajillion times
	const reportContents = report.contents;
	// doing this to guarantee that the text content is first
	const textContent = reportContents.find(content => content.type === "text");
	const [extraInfo, setExtraInfo] = useState(false);
	const hasMediaContent = reportContents.find(
		content => content.type === "image" || content.type === "video"
	);
	const limitCharLength = 380;

	return (
		<>
			{report?.officer && (
				<h3>
					Report for: {report.officer.last_name}, {report.officer.first_name}
				</h3>
			)}
			<article className='Post'>
				<div className='Post-caption'>
					<strong className='userNameDisplay'>{report.username}:</strong>
					<p>
						{" "}
						{extraInfo
							? textContent?.content
							: limitCharacters(textContent?.content, limitCharLength)}{" "}
					</p>
					{textContent?.content.length < limitCharLength ? (
						""
					) : (
						<button onClick={() => setExtraInfo(!extraInfo)}>
							{extraInfo ? "Show Less" : "Show More"}
						</button>
					)}
				</div>
				{hasMediaContent && (
					<Accordion allowZeroExpanded='true'>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>MEDIA</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
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
							</AccordionItemPanel>
						</AccordionItem>
					</Accordion>
				)}

				<CommentSection
					comments={report.comments}
					reportId={report.id}
				/>
			</article>
		</>
	);
};
