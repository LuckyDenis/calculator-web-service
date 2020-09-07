'use strict';
import React, { Component } from "react";
import Row from "../Row/Row";
import "./Numpade.scss";


const numpade = [
    {
        className: "num-row-1 row",
        specButtons: [
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "xᵏ",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "x!",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "±",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "C",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "()",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "%"
            },
            {
                className: "purple-btn normal-size-btn btn",
                caption: "÷"
            }
        ]
    },
    {
        className: "num-row-2 row",
        specButtons: [
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "asin",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "sin",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "1/x",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "7",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "8",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "9"
            },
            {
                className: "purple-btn normal-size-btn btn",
                caption: "×"
            }
        ]
    },
    {
        className: "num-row-3 row",
        specButtons: [
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "acos",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "cos",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "√",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "4",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "5",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "6"
            },
            {
                className: "purple-btn normal-size-btn btn",
                caption: "-"
            }
        ]
    },
    {
        className: "num-row-4 row",
        specButtons: [
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "atan",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "tan",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "ln",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "1",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "2",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: "3"
            },
            {
                className: "purple-btn normal-size-btn btn",
                caption: "+"
            }
        ]
    },
    {
        className: "num-row-5 row",
        specButtons: [
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "lg",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "π",
            },
            {
                className: "light-grey-btn normal-size-btn btn",
                caption: "e",
            },
            {
                className: "white-smoke-btn double-size-btn btn",
                caption: "0",
            },
            {
                className: "white-smoke-btn normal-size-btn btn",
                caption: ",",
            },
            {
                className: "purple-btn normal-size-btn btn",
                caption: "="
            }
        ]
    },
]


class Numpade extends Component {
    constructor(props) {
        super(props);
        this.makeNumpade = this.makeNumpade.bind(this);
    }

    makeNumpade(template){
        console.info(typeof template)
        console.info(template)
        const rows = []
        template.forEach((rowTemplate, key) => {
            rows.push(
                <Row d={rowTemplate} key={key}/>
            )
        });
        return rows;
    };

    render() {
        return (
            <div className={"numpade-section"} >
                { this.makeNumpade( numpade )}
            </div>
        )
    };
}


export default Numpade;
