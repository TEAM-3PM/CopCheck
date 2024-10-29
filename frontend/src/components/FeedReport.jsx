export const FeedReport = () => {
  return (
    <article className="Post" ref="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-nickname">
            <span>John Doe</span>
          </div>
        </div>
      </header>
      <div className="Post-caption">
        <strong> USER </strong> {textContent?.content}
      </div>
      <div>
        <div className="Post-image">
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
        </div>
      </div>
    </article>
  );
};
/*
(
    <div style={{ padding: "5px", border: "solid", borderRight: "none" }}>
        <p>{textContent?.content}</p>

        {reportContents.map(content => {
            // this map will skip over the text content
            if (content.type === "image")
                return (
                    <img
                        key={content.id}
                        src={content.content}
                        alt='Report content'
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
    </div>
);

*/
