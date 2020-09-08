'use strict';
import React, { Component } from "react";
import Span from "../Span/Span";
import "./AnswerScreen.scss";

class AnswerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.d.className
        }
    }

    render() {
        const params = {
            className: "answer-screen screen-row",
        }
        return (
            <div className={this.state.className} >
                <Span d={params} />
            </div>
        )
    }
}


export default AnswerScreen;
