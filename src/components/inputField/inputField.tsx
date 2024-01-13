import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import hidePasswordImage from "./images/hidePassword.png";
import showPasswordImage from "./images/showPassword.png";
import "./style.css";

function InputField({ setTextCallback, isPassword = false }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={ isPassword ? "adjustedInputField" : "inputField" }>
            <TextField
                type={ !isPassword || showPassword ? "text" : "password" }
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setTextCallback(event.target.value);
                }}
            />
            { isPassword && showPassword &&
                <img
                    className="passwordImage"
                    src={hidePasswordImage}
                    alt="hidePassword"
                    onClick={() => { setShowPassword(false) }}
                />
            }
            { isPassword && !showPassword &&
                <img
                    className="passwordImage"
                    src={showPasswordImage}
                    alt="showPassword"
                    onClick={() => { setShowPassword(true) }}
                />
            }
        </div>
    );
}

export default InputField;
