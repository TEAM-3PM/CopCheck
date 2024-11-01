import React, { useEffect } from "react";
import ListOfReports from "./ListOfReports";
import Slogan from "../Cop Check Assets/2.png";
import { DataComponent } from "../components/DataComponent";

import { HomePageSearchBar } from "../components/HomePageSearch";

export default function HomePage() {
  return (
    <div>
      {/* <section id="slogan-section">
        <img src={Slogan} alt="Cop Check Slogan" id="HomePageSlogan" />
      </section> */}
      <div className="slide-in-text">
        <h1 style={{ marginTop: '75px' }}>
          Put
          <br />
          The <span className="highlight-power">Power</span>
          <br />
          Back in your hands...
        </h1>
        <h4 className="authority-check" style={{ marginTop: "10px" }}>Your Voice, Your Power.</h4>
      </div>
      <DataComponent />
      <div id="data-section" >
      </div>
      <div id="search-section" style={{ textAlignLast: 'center', backgroundColor: 'white', color: 'black', padding: '10px' }} >
        <h1>Ready to make your report?</h1>
        <br />
        <h2>Search for the officer here:</h2>
      </div>
      <HomePageSearchBar />
    </div>
  );
}
