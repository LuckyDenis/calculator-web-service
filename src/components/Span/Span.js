'use strict';
import React, { Component } from "react";


class Span extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.d.className,
            text: props.d.text || " ",
        }
    }

    render() {
        return (
            <div className={this.state.className} >
                <span>
                    { this.state.text }
                </span>
            </div>
        )
    }
}


export default Span;
