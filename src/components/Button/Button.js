'use strict';
import React, { Component } from "react";
import "./Button.scss"


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.d.className,
            caption: props.d.caption,
            key: props.d.key
        }
    }
    render() {
        return(
            <button className={ this.state.className } key={ this.state.key }>
                { this.state.caption }
            </button>
        )
    }
}


export default Button;
