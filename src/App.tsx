import React from "react";
import Router from "./router.tsx";
import Footer from "./components/footer/footer.tsx";
import "./App.css";

function App() {
    return (
        <div className="appBackground">
            <Router />
            <Footer />
        </div>
    );
}

export default App;
