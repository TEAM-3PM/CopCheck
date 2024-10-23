import React, { useEffect } from "react";
import ListOfReports from "./ListOfReports";
import Slogan from "../Cop Check Assets/2.png";

export default function HomePage() {
  return (
    <div>
      <section id="slogan-section">
        <img src={Slogan} alt="" id="HomePageSlogan" />
      </section>

    </div>
  );
}
