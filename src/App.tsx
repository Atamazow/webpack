import React, { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import UseTheme from "./theme/useTheme";

function App() {
    const {theme, toggleTheme} = UseTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}> Toggle</button>
      <br />
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
