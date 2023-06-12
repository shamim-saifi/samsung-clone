import React, { Fragment } from "react";
import "./Heading.css";


const Heading=({heading})=>{
    return(
        <Fragment>
            <h1 id="heading">{heading}</h1>
        </Fragment>
    )
}

export default Heading;