/** @format */
import { ThumbnailCard } from "./ThumbnailCard";

export const ThumbnailList = ({ thumbnails }) => {
	return (
		<div
			className='row-flex'
			style={{
				justifyContent: "flex-start",
				flexWrap: "wrap",
				alignItems: "self-end",
				maxWidth: "750px",
			}}>
			{thumbnails.map((thumbnailInfo, i) => (
				<ThumbnailCard
					key={i}
					thumbnailInfo={thumbnailInfo}
				/>
			))}
		</div>
	);
};
