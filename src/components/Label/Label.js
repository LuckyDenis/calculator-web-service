'use strict';
import React, { Component } from "react";


class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.date.className,
            text: props.date.text
        };
    };
    render(){
        return (
            <lable className={this.state.className}>
                {this.state.text}
            </lable>
        )
    };
}


export default Label;
