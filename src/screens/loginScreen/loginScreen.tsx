import React, { useState } from "react";
import Cookies from 'universal-cookie';
import RouterButton from "../../components/routerButton/routerButton.tsx";
import Label from "../../components/label/label.tsx";
import InputField from "../../components/inputField/inputField.tsx";
import mockedLoginInformation from "../../mockedData/loginInformation.json";
import "./style.css";

function LoginScreen({ setLoggedInCallback }) {
    // constants
    const cookies = new Cookies(null, { path: '/' });

    // state variables
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectLogin, setIncorrectLogin] = useState(false);

    // checks that the user entered in the correct information to login
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
                        destination="/"
                        additionalStyling={ { margin: 10 } }
                        onClick={ () => {
                            cookies.set('portfolio-tracker-logged-in', true);
                            setLoggedInCallback(true);
                        } }
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
            { incorrectLogin && <Label text="Incorrect login information" styling="errorLabel" />}
        </div>
    );
}

export default LoginScreen;
