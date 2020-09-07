'use strict';
import React, { Component } from "react";
import Desktop from "../Calculator/Desktop";
import './App.scss';


class App extends Component {
    render() {
        return (
            <div className={"app"}>
                <Desktop />
            </div>
        );
    }
}


export default App;
