import React from "react";
import TextField from "@mui/material/TextField";
import "./style.css";

function InputField({ setTextCallback }) {

    return (
        <div className="inputField">
            <TextField
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTextCallback(event.target.value);
                }}
            />
        </div>
    );
}

export default InputField;
