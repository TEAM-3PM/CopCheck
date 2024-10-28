/** @format */

export const ThumbnailCard = ({ thumbnailInfo }) => {
	const fileName = thumbnailInfo.fileName;
	return (
		<div className='col-flex'>
			<img
				src={thumbnailInfo.src}
				alt=''
				style={{ minWidth: "100px", maxWidth: "200px", height: "auto" }}
			/>
			<p>
				{fileName.length < 15
					? fileName
					: fileName.slice(0, 10) + "..." + fileName.slice(fileName.length - 2)}
				{thumbnailInfo.format}
			</p>
		</div>
	);
};
