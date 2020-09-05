'use strict';
import React, { Component } from "react";
import "./Logo.scss";
import logo from '../../html/favicon.svg';

const Logo = () => {
    return <img src={logo} className={"logo"} alt={"Logo"} />
}


export default Logo;

