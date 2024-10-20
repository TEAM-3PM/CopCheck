import React, { useState, useEffect } from "react";
import { fetchHandler } from "../utils/fetchingUtils";
import VideoPlayer from "../components/cloudinary/VideoPlayer";

const ListOfReports = () => {
    const [posts, setPosts] = useState([]); // State to store the reports
    const [officers, setOfficers] = useState({}); // Map of officer_id -> officer object

    // Fetch reports and officers when the component mounts
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const [data, error] = await fetchHandler("/api/reports");
                if (error) {
                    console.error("Error fetching reports:", error);
                    return;
                }
                setPosts(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error fetching reports:", error);
            }
        };

        const fetchOfficers = async () => {
            try {
                const [data, error] = await fetchHandler("/api/officers");
                if (error) {
                    console.error("Error fetching officers:", error);
                    return;
                }
                // Create a map of officer_id -> officer object for easy lookup
                const officerMap = data.reduce((acc, officer) => {
                    acc[officer.id] = officer;
                    return acc;
                }, {});
                setOfficers(officerMap);
            } catch (error) {
                console.error("Error fetching officers:", error);
            }
        };

        fetchReports();
        fetchOfficers();
    }, []);

    return (
        <div className="posts-container">
            {posts.length > 0 ? (
                posts.map((post) => {
                    const officer = officers[post.officer_id]; // Find officer by ID
                    return (
                        <div key={post.content_id} className="post-item">
                            <h3>
                                Reported Officer:{" "}
                                {officer
                                    ? `${officer.first_name} ${officer.last_name}`
                                    : "Unknown Officer"}
                            </h3>
                            {post.type === "text" && <p>{post.content}</p>}
                            {post.type === "image" && (
                                <img src={post.content} alt="Post content" />
                            )}
                            {post.type === "video" && (
                                <VideoPlayer
                                    width={640}
                                    height={720}
                                    publicID={post.content}
                                />
                            )}
                        </div>
                    );
                })
            ) : (
                <p>No reports available.</p>
            )}
        </div>
    );
};

export default ListOfReports;
