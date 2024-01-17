import React from "react";
import "./style.css";

function RouterButton({ text, styling = "label" }) {

    return (
        <div className={ styling }>
            { text }
        </div>
    );
}

export default RouterButton;
