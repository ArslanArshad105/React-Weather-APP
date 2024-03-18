import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const {
    changeTheme,
    currentTheme,
    tempUnit,
    setLocation,
    tempUnitConverter,
    forecastData,
  } = props;

  const changeLocation = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    } else if (e.target.value === "" && setLocation !== "Lahore") {
      setLocation("Lahore");
    }
  };
  return (
    <>
      <div className="location">
        <label className="city">{forecastData.location.name}</label>
        <label className="country">{forecastData.location.country}</label>
        <label className="date">{forecastData.location.localtime}</label>
      </div>
      <div className="settings">
        <div className="units">
          <span
            className={tempUnit === "Celsius" ? "span active" : "span"}
            onClick={() => {
              tempUnitConverter("Celsius");
            }}
          >
            °C
          </span>
          <span
            className={tempUnit === "Fahrenheit" ? "span active" : "span"}
            onClick={() => {
              tempUnitConverter("Fahrenheit");
            }}
          >
            °F
          </span>
        </div>

        <div className="button-theme" onClick={changeTheme}>
          {currentTheme === "light" ? (
            <FontAwesomeIcon icon={faMoon} className="light" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="dark" />
          )}
        </div>
      </div>
      <div className="search">
        <input
          className="input"
          placeholder="Enter your location"
          onKeyDown={changeLocation}
        ></input>
      </div>
    </>
  );
};

export default Header;
