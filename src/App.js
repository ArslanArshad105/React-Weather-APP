import React, { useState } from "react";
import "./App.css";
import "./styles/base.scss";
import Container from "./components/Container/Container";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div data-theme={theme} className="app-container">
      <Container changeTheme={changeTheme} currentTheme={theme} />
    </div>
  );
}

export default App;
