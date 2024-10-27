import React, { useEffect } from "react";
import ListOfReports from "./ListOfReports";
import Slogan from "../Cop Check Assets/2.png";

export default function HomePage() {
  return (
    <div>
      {/* <section id="slogan-section">
        <img src={Slogan} alt="Cop Check Slogan" id="HomePageSlogan" />
      </section> */}
      <div className="slide-in-text">
        <h1>
          Put
          <br />
          The <span className="highlight-power">Power</span>
          <br />
          Back in your hands...
        </h1>
        <h4 className="authority-check">CHECK THE AUTHORITY!</h4>
      </div>
    </div>
  );
}


