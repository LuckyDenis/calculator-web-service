'use strict';
import React, { Component } from "react";


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.d.className,
            placeholder: props.d.placeholder  || " "
        }
    }
    render() {
        return (
            <input
                className={this.state.className}
                placeholder={this.state.placeholder} />
        )
    }
}


export default Input;
