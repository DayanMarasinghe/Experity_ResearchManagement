import React from "react";
import  ReactDOM  from "react";
const userLogin = require("../components/userLogin");
import header from '../components/shared/header'
import footer from '../components/shared/footer'
import table from '../components/panelmember-view/pmSchemeView'

it("Test for header", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(header,div)
})