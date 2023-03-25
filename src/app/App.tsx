import React, { Suspense} from "react";
import { Route, Routes, Link } from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import { UseTheme } from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import "./styles/index.scss";


function App() {
    const {theme, toggleTheme} = UseTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}> Toggle</button>
      <br />
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
