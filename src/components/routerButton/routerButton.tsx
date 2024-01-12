import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function RouterButton({ label, destination, beforeRoute, additionalStyling = {} }) {
    return (
        <Link className="routerButton" to={destination} onClick={beforeRoute} style={additionalStyling} >
            {label}
        </Link>
    );
}

export default RouterButton;
