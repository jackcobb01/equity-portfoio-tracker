import React, { useState } from "react";
import RouterButton from "../../components/routerButton/routerButton.tsx";
import Label from "../../components/label/label.tsx";
import InputField from "../../components/inputField/inputField.tsx";
import mockedLoginInformation from "../../mockedData/loginInformation.json";
import "./style.css";

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectLogin, setIncorrectLogin] = useState(false);

    const isAuthenticated = () => {
        return username === mockedLoginInformation.mockUsername && password === mockedLoginInformation.mockPassword;
    };

    return (
        <div className="loginScreen">
            <div className={ incorrectLogin ? "loginScreenPanelWithError" : "loginScreenPanel" }>
                <Label text="Username"/>
                <InputField setTextCallback={ setUsername } />
                <Label text="Password"/>
                <InputField setTextCallback={ setPassword } isPassword={ true } />
                {
                    isAuthenticated() ?
                    <RouterButton
                        label="Login"
                        destination="dashboard"
                        additionalStyling={ { margin: 10 } }
                    />
                    :
                    <RouterButton
                        label="Login"
                        destination="/"
                        additionalStyling={ { margin: 10 } }
                        onClick={ () => { setIncorrectLogin(true) } }
                    />
                }
            </div>
            { incorrectLogin && <Label text="Incorrect login information" isError={true} />}
        </div>
    );
}

export default LoginScreen;
