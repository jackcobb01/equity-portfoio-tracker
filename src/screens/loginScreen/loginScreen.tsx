import React, { useState } from "react";
import RouterButton from "../../components/routerButton/routerButton.tsx";
import Label from "../../components/label/label.tsx";
import InputField from "../../components/inputField/inputField.tsx";
import "./style.css";

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authenticateUser = () => {
        console.log('typed username: ' + username);
        console.log('typed password: ' + password);
    }

    return (
        <div className="loginScreen">
            <div className="loginScreenPanel">
                <Label text="Username"/>
                <InputField setTextCallback={ setUsername } />
                <Label text="Password"/>
                <InputField setTextCallback={ setPassword } />
                <RouterButton label="Login" destination="dashboard" beforeRoute={authenticateUser} additionalStyling={ { margin: 10 } } />
            </div>
        </div>
    );
}

export default LoginScreen;
