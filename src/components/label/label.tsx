import React from "react";
import "./style.css";

function RouterButton({ text, isError = false }) {

    return (
        <div className={ isError ? "errorLabel" : "label" }>
            { text }
        </div>
    );
}

export default RouterButton;
