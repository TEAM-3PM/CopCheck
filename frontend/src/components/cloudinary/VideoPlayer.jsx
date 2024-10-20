import { useEffect, useRef } from "react";

const VideoPlayer = ({ publicID, width, height }) => {
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if (cloudinaryRef.current) return;
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloudName: 'dr0fnb0zr'
        })
    }, [])

    return (
        <>
            <video
                ref={videoRef}
                data-cld-public-id={publicID}
                width={width}
                height={height}
                controls

            ></video>
        </>
    )
};


export default VideoPlayer