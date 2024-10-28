export const DataComponent = () => {
  // console.log(complaint);
  return (
    <div>
      <h1>The Data</h1>
      <div className="DataComponent">
        <div className="section">
          <h2>Police killings</h2>
          <p>
            Black Americans are more than twice as likely to be killed by police
            than white people. Between <span className="data-num">2015</span>{" "}
            and <span className="data-num">2021</span> Black Americans were{" "}
            <span className="data-num">2.5</span> times more likely to be shot
            and killed by police than white people.
          </p>
          <a href="https://policebrutalitycenter.org/police-brutality/statistics/">
            Police Brutality Center
          </a>
        </div>
        <div className="section">
          <h2>Police use of force</h2>
          <p>
            Police are more likely to use or threaten force against Black people
            than white people. In <span className="data-num">2020</span>, police
            were <span className="data-num">2.5 times</span> more likely to use
            or threaten force against Black people than white people.
          </p>
          <a href="https://www.sentencingproject.org/reports/one-in-five-disparities-in-crime-and-policing/">
            The Sentencing Project
          </a>
        </div>
        <div className="section">
          <h2>Police complaints</h2>
          <p>
            People of color are <span className="data-num">three times</span>{" "}
            more likely to be identified as the injured party in a police
            misconduct complaint than white people.
          </p>
          <a href="https://www.nyclu.org/data/nypd-discipline-numbers">
            ACLU of New York
          </a>
        </div>
      </div>
    </div>
  );
};
