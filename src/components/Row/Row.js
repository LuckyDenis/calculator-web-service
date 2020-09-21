'use strict';
import React, { Component } from "react";


class Row extends Component{
    constructor(props) {
        super(props);
        this.state = {
            className: props.date.className,
            buttons: props.date.buttons,
        };
        this.key = props.date.key
    };
    render(){
        return (
            <div className={this.state.className} key={this.key}>
                { this.state.buttons }
            </div>
        )
    };
}

export default Row;
