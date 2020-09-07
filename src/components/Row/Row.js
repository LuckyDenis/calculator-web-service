'use strict';
import React, { Component } from "react";
import Button from "../Button/Button";
import "./Row.scss";


class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.d.className,
            specButtons: props.d.specButtons
        }
        this.makeButtonsRow = this.makeButtonsRow.bind(this);
    };

    makeButtonsRow(specButtons) {
        const buttonsRow = []
        specButtons.forEach((spec, key) => {
            buttonsRow.push(
                <Button d={spec} key={key}/>
            );
        });
        return buttonsRow;
    };

    render() {
        return (
            <div className={ this.state.className } key={ this.state.className }>
                { this.makeButtonsRow( this.state.specButtons )}
            </div>
        )
    }
}


export default Row;