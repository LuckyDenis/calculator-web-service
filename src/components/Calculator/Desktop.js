'use strict';
import React, { Component } from "react";
import Numpade from "../Numpade/Numpade";
import "./Desctop.scss";


class Desktop extends Component{
    render() {
        return (
            <div className={"desktop"}>
                <Numpade />
            </div>
        );
    }
}


export default Desktop;