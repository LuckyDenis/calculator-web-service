'use strict';
import React, { Component } from "react";
import Calculator from "../Calculator/Calculator";
import "./App.scss";

// todo: To Configure Redux.

class App extends Component {
    render(){
        return (
            <div className={"app__desktop"}>
                <Calculator date={{type: "desktop"}} />
            </div>
        )
    }
}


export default App;
