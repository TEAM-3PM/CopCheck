/** @format */
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
//import "react-accessible-accordion/dist/fancy-example.css";

export const UserReportCard = ({ report, user_id }) => {
  // doing this to avoid having to do report.contents a bajillion times
  const reportContents = report.contents;
  // doing this to guarantee that the text content is first
  const textContent = reportContents.find((content) => content.type === "text");
  const [extraInfo, setExtraInfo] = useState(false);
  const [username, setUsername] = useState("");
  const hasMediaContent = reportContents.find(
    (content) => content.type === "image" || content.type === "video"
  );
  const limitCharLength = 380;
  useEffect(() => {
    const fetchUsername = async () => {
      const response = await fetchHandler(`/api/users/${user_id}`);
      setUsername(response[0].username);
    };
    fetchUsername();
  }, [user_id]);

  return (
    <article className="Post">
      <div className="Post-caption">
        <strong className="userNameDisplay">{username}:</strong>
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
      {hasMediaContent ? (
        <Accordion allowZeroExpanded="true">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>MEDIA</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {reportContents.map((content) => {
                // this map will skip over the text content
                if (content.type === "image")
                  return (
                    <img
                      key={content.id}
                      src={content.content}
                      alt="Report content"
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
      ) : (
        ""
      )}

      <section id="commentSection">
        <h4>Comments</h4>
        {report.comments.length > 0 ? "hello" : <p>No Comments Found...</p>}
      </section>
    </article>
  );
};
