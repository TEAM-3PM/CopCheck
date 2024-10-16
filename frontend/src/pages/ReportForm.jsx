import { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { fetchHandler } from "../utils/fetchingUtils";


const ReportForm = () => {
    const navigate = useNavigate();
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
            const response = await fetchHandler();
            const data = await response.json();
            setOfficers(data)
        };
        fetchOfficers();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const FormData = new FormData();
        FormData.append('officerId', selectedOfficer); // putting the officers selected ID 
        FormData.append('reportDetails', reportDetails); // appending the details 
        if (file) FormData.append('file', file);

        // ADD API ENDPOINT 
        const response = await fetchHandler('', {
            method: 'POST',
            body: FormData
        });

        if (response.ok) {
            alert('Your report has been submitted successfully!');
        } else {
            alert('Failed to submit report');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Create a report</h2>

                <label>
                    Select Officer:
                    <select
                        value={selectedOfficer}
                        onChange={(e) => setSelectedOfficer(e.target.value)} required>
                        <option value="">Select an Officer</option>
                        {officers.map(officer => (
                            <option key={officer.id} value={officer.id}>{officer.name}</option>
                        ))}
                    </select>
                </label>

                <label >
                    Report Details:
                    <textarea
                        value={reportDetails}
                        onChange={(e) => setReportDetails(e.target.value)} required>
                    </textarea>
                </label>

                <label>
                    Upload an Image or Video:
                    <select
                        value={file}
                        onChange={(e) => setFile(e.target.value)}>
                    </select>
                </label>

                <button>Submit report</button>
            </form >
        </>
    )

}


export default ReportForm