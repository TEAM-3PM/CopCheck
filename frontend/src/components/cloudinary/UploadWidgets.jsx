import { useEffect, useRef } from "react";

const UploadWidget = ({ onUpload }) => {
    const widgetRef = useRef();

    useEffect(() => {
        widgetRef.current = window.cloudinary.createUploadWidget({
            cloudName: 'dr0fnb0zr',
            uploadPreset: 'n2jgrfzo'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                onUpload(result.info); // Pass the uploaded file info back to the parent
            }
            console.log(result);
        });
    }, []);
    // [onUpload]
    return (
        <button onClick={() => widgetRef.current.open()}>Upload a Image or Video</button>
    );
};

export default UploadWidget;
