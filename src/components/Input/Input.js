'use strict';
import React, { Component } from "react";


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.date.className,
            placeholder: props.date.placeholder,
            value: props.date.value
        };
    };
    render(){
        return (
           <input
               className={this.state.className}
               placeholder={this.state.placeholder}
               defaultValue={this.state.value}
               />
        )
    };
}


export default Input;
