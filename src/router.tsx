import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard.tsx";
import Account from "./screens/account/account.tsx";
import TransactionHistory from "./screens/transactionHistory/transactionHistory.tsx";
import Settings from "./screens/settings/settings.tsx";

// this function returns the router component
function Router({ setLoggedOutCallback }) {
    return (
        <Routes> {/*This component decides which component to show based on url*/}
            <Route path="/" element={<Dashboard />} />
            <Route path="account" element={<Account setLoggedOutCallback={ setLoggedOutCallback } />} />
            <Route path="history" element={<TransactionHistory />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
    );
}

export default Router;
