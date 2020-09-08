'use strict';
import React, { Component } from "react";
import "./Screen.scss";
import InputScreen from "../InputScreen/InputScreen";
import AnswerScreen from "../AnswerScreen/AnswerScreen";


class Screen extends Component {
    render() {
        const paramsInput = {
            className: "screen-row-2"
        }

        const paramsAnswer = {
            className: "screen-row-1"
        }

        return (
            <div className={"screen"} >
                <AnswerScreen d={paramsAnswer} />
                <InputScreen d={paramsInput} />
            </div>
        );
    }
}


export default Screen;