import { useEffect, useRef } from "react";

const UploadWidget = ({ onUpload }) => {
    const widgetRef = useRef();

    useEffect(() => {
        widgetRef.current = window.cloudinary.createUploadWidget({
            cloudName: 'dr0fnb0zr',
            uploadPreset: 'nwea2gcq'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                onUpload(result.info);
            }
            console.log(result);
        });
    }, [onUpload]);
    // [onUpload]
    return (
        <button type="button" onClick={() => widgetRef.current.open()}>Upload a Image or Video</button>
    );
};

export default UploadWidget;
