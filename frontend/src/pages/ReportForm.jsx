import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchHandler } from "../utils/fetchingUtils";
import { createReport } from "../adapters/report-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import UploadWidget from "../components/cloudinary/UploadWidgets.jsx";

const ReportForm = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(CurrentUserContext);
    const [officers, setOfficers] = useState([]);
    const [selectedOfficer, setSelectedOfficer] = useState("");
    const [reportDetails, setReportDetails] = useState("");
    const [contents, setContents] = useState([]);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    useEffect(() => {
        const fetchOfficers = async () => {
            const [data, error] = await fetchHandler("/api/officers");
            if (data) setOfficers(data);
        };
        fetchOfficers();
    }, []);

    const handleUpload = uploadedFile => {
        setContents(previous => [
            ...previous,
            uploadedFile.resource_type === "image"
                ? {
                    type: uploadedFile.resource_type,
                    content: uploadedFile.secure_url,
                }
                : {
                    type: uploadedFile.resource_type,
                    content: uploadedFile.public_id,
                },
        ]);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const [data, error] = await createReport({
            officer_id: selectedOfficer,
            contents: [
                {
                    type: "text",
                    content: reportDetails,
                },
                ...contents,
            ],
        });

        if (data) {
            alert("Your report has been submitted successfully!");
        } else {
            alert("Failed to submit report");
        }
        setContents([]);
        navigate(`/officers/${selectedOfficer}`);
        console.log(error);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Create a report</h2>

                <label>
                    Select Officer:
                    <select
                        value={selectedOfficer}
                        onChange={e => setSelectedOfficer(e.target.value)}
                        required>
                        <option value='' disabled>Select an Officer</option>
                        {officers.map(officer => (
                            <option key={officer?.id} value={officer?.id}>
                                {officer.last_name}, {officer.first_name}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Report Details:
                    <textarea
                        value={reportDetails}
                        onChange={e => setReportDetails(e.target.value)}
                        maxLength={4000}
                        required
                    />
                    <div style={{ color: reportDetails.length === 4000 ? 'red' : reportDetails.length <= 3000 ? 'white' : "yellow" }}>{reportDetails.length} / 4000 characters remaining</div>
                </label>

                <label>
                    Upload an Image or Video:
                    <UploadWidget onUpload={handleUpload} />
                </label>

                {uploadSuccess && <p style={{ color: 'green' }}>Upload successful!</p>}

                <button type='submit'>Submit report</button>
            </form>
        </>
    );
};

export default ReportForm;
