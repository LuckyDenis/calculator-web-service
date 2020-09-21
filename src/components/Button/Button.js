'use strict';
import React, { Component } from "react";
import {desktopNumpadeSpec} from "../../containers/Calculator/Spec";


class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {
            className: props.date.className,
            caption: props.date.caption
        };
        this.key = props.date.key
    };
    render() {
        return (
            <button
                className={this.state.className} key={this.key}>
                { this.state.caption }
            </button>
        )
    };
}

export default Button;
