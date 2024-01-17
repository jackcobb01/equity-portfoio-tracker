import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function RouterButton({ label, destination, additionalStyling = {}, onClick = () => {}, graphic = "" }) {
    return (
        <div>
            <Link className="routerButton" to={destination} style={additionalStyling} onClick={onClick}>
                {label}
                {graphic !== "" &&
                    <img
                        className="routerButtonImage"
                        src={graphic}
                        alt="routerImage"
                    />
                }
            </Link>
        </div>
    );
}

export default RouterButton;
