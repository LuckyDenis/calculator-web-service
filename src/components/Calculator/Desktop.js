'use strict';
import React, { Component } from "react";
import Numpade from "../Numpade/Numpade";
import Screen from "../Screen/Screen";
import "./Desctop.scss";


class Desktop extends Component{
    render() {
        return (
            <div className={"desktop calculator"}>
                <Screen />
                <Numpade />
            </div>
        );
    }
}


export default Desktop;