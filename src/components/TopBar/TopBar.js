import React from "react";
import "./TopBar.scss";

const TopBar = () => {
  return (
    <div className="top-bar">
      The application is running using Free Weather API. To get the Free Weather
      API with real data please check the{" "}
      <a
        href="https://www.weatherapi.com/docs/"
        target="_blank"
        rel="noreferrer"
      >
        documentation.
      </a>
    </div>
  );
};

export default TopBar;
