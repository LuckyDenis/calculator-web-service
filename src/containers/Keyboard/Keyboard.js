'use strict';
import React, { Component } from "react";


class Keyboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            keyboard: props.date.keyboard
        };
    };

    render(){
        return (
            <div className={"calculator__wrap_keyboard calculator__row_2"} >
                {this.state.keyboard}
            </div>
        )
    };
}

export default Keyboard;
