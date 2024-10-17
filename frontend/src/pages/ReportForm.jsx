import { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { fetchHandler } from "../utils/fetchingUtils";
import { createReport } from "../adapters/report-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import UploadWidget from '../components/cloudinary/UploadWidgets.jsx'


const ReportForm = () => {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    // store a list of officers fetched from database in an array 
    const [officers, setOfficers] = useState([]);
    // set the state of this to the officers ID
    const [selectedOfficer, setSelectedOfficer] = useState('');
    // track the state of the report details by the user 
    const [reportDetails, setReportDetails] = useState('');
    // state to check for a file (video or image)
    const [file, setFile] = useState(null);



    useEffect(() => {
        const fetchOfficers = async () => {
            // ADD API ENDPOINT FOR OFFICERS 
            const [data, error] = await fetchHandler('/api/officers');
            if (data) setOfficers(data)
        };
        fetchOfficers();
    }, [])

    const handleUpload = (uploadedFile) => {
        setFile(uploadedFile.secure_url);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // ADD API ENDPOINT 
        const [data, error] = await createReport({ user_id: currentUser?.id, officer_id: selectedOfficer, file })
        if (data) {
            alert('Your report has been submitted successfully!');
        } else {
            alert('Failed to submit report')
        }
        console.log({ report_id: data?.id })
    };

    console.log({ user_id: currentUser?.id, officer_id: selectedOfficer, user: currentUser, })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Create a report</h2>

                <label>
                    Select Officer:
                    <select
                        value={selectedOfficer}
                        onChange={(e) => setSelectedOfficer(e.target.value)} required>
                        <option value="" disabled>Select an Officer</option>
                        {officers.map(officer => (
                            <option key={officer?.id} value={officer?.id}>{officer.last_name}, {officer.first_name}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Report Details:
                    <textarea
                        value={reportDetails}
                        onChange={(e) => setReportDetails(e.target.value)} required>
                    </textarea>
                </label>

                <label>
                    Upload an Image or Video:
                    <UploadWidget onUpload={handleUpload}
                        onClick={() => widgetRef.current.open()} />
                </label>

                <button type="submit">Submit report</button>
            </form >
        </>
    )

}


export default ReportForm
