import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import { UseTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


function App() {
    const {theme} = UseTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <AppRouter/>

    </div>
  );
}

export default App;
