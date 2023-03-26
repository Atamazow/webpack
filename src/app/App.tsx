import React, { Suspense} from "react";
import { Route, Routes, Link } from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import { UseTheme } from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import "./styles/index.scss";
import {AppRouter} from "app/providers/router";


function App() {
    const {theme, toggleTheme} = UseTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}> Toggle</button>
      <br />
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>О нас</Link>
        <AppRouter/>
    </div>
  );
}

export default App;
