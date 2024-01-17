import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/loginScreen/loginScreen.tsx";
import Dashboard from "./screens/dashboard/dashboard.tsx";
import Account from "./screens/account/account.tsx";
import TransactionHistory from "./screens/transactionHistory/transactionHistory.tsx";
import Settings from "./screens/settings/settings.tsx";

// this function returns the router component
function Router({ setLoggedInCallback }) {
    return (
        <Routes> {/*This component decides which component to show based on url*/}
            <Route path="/" element={<LoginScreen setLoggedInCallback={setLoggedInCallback} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="history" element={<TransactionHistory />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
    );
}

export default Router;
