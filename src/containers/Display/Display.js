'use strict';
import React, { Component } from "react";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";


class Display extends Component{
    render(){
        return (
            <div className={"calculator__wrap_display calculator__row_1"} >
                <Label date={{className: 'calculator__display calculator__display_row_1',
                    text: "0"}} />
                <Input date={{className: "calculator__display calculator__display_row_2",
                    value: "", placeholder: "0"}} />
            </div>
        )
    };
}

export default Display;
