import React, { useState } from "react";
import Router from "./router.tsx";
import SideBar from "./components/sideBar/sideBar.tsx";
import Footer from "./components/footer/footer.tsx";
import "./App.css";

function App() {

    // app state variables
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="appBackground">
            <div className="appMainContent">
                {loggedIn && <SideBar />}
                <Router setLoggedInCallback={setLoggedIn} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
