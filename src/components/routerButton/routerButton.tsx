import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function RouterButton({ label, destination, additionalStyling = {}, onClick = () => {} }) {
    return (
        <Link className="routerButton" to={destination} style={additionalStyling} onClick={onClick}>
            {label}
        </Link>
    );
}

export default RouterButton;
