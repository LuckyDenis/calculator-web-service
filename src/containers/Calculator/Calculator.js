'use strict';
import React, { Component } from "react";
import Row from "../../components/Row/Row";
import Keyboard from "../Keyboard/Keyboard";
import Button from "../../components/Button/Button";
import Display from "../Display/Display";
import { desktopNumpadeSpec} from "./Spec.js";
import "./Calculator.scss";


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.date.type
        }
        this.makeKeyboard = this.makeKeyboard.bind(this);
        this.objectLength = this.objectLength.bind(this);
    }

    objectLength(obj) {
        return Object.getOwnPropertyNames(obj).length
    }

    makeKeyboard() {
        const numpade = []
        const countRows = this.objectLength(desktopNumpadeSpec)
        for(let i = 1; i < countRows + 1; i++){
            const row = []
            const countCols = this.objectLength(desktopNumpadeSpec[i])
            for(let j = 1; j < countCols + 1; j++){
                row.push(
                    <Button date={{
                        className: `${desktopNumpadeSpec[i][j].className} btn-${j}`,
                        caption: desktopNumpadeSpec[i][j].caption
                    }} key={j} />
                )
            }
            numpade.push(
                <Row date={{className: `keyboard__row_${i}`, buttons: row }} key={`np-${i}`} />
            )
        }
        return numpade;
    }

    render() {
        const keyboard = this.makeKeyboard()

        return (
            <div className={`app_${this.state.type}__calculator`}>
                <Display />
                <Keyboard date={{keyboard: keyboard}}/>
            </div>
        )
    }
}


export default Calculator;
