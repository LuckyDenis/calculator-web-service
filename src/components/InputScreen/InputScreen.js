'use strict';
import React, { Component } from "react";
import Input from "../Input/Input";


class InputScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.d.className
        }
    }

    render() {
        const params = {
            className: "screen-row input-screen",
            placeholder: "0"
        };
        return (
            <div className={ this.state.className } >
                <Input d={params} />
            </div>
        );
    }
}


export default InputScreen;
