import React, { useState } from "react";
import Cookies from 'universal-cookie';
import LoginScreen from "./screens/loginScreen/loginScreen.tsx";
import Router from "./router.tsx";
import SideBar from "./components/sideBar/sideBar.tsx";
import Footer from "./components/footer/footer.tsx";
import "./App.css";

function App() {
    // constants
    const cookies = new Cookies(null, { path: '/' });

    // app state variables
    const [loggedIn, setLoggedIn] = useState(false);

    // the following function checks for a login cookie to exist
    const getLoginCookie = () => {
        return cookies.get('portfolio-tracker-logged-in');
    };

    return (
        <div className="appBackground">
                {!getLoginCookie() && !loggedIn ?
                    <LoginScreen setLoggedInCallback={setLoggedIn} />
                    :
                    <div className="appMainContent">
                        <SideBar />
                        <Router />
                    </div>
                }
            <Footer />
        </div>
    );
}

export default App;
