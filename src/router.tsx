import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/loginScreen/loginScreen.tsx";
import Dashboard from "./screens/dashboard/dashboard.tsx";

// this function returns the router component
function Router() {
    return (
        <BrowserRouter>
            <Routes> {/*This component decides which component to show based on url*/}
                <Route path="/" element={<LoginScreen />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
