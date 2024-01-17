import React from "react";
import RouterButton from "../routerButton/routerButton.tsx";
import dashboardImage from "./images/dashboard.png";
import accountImage from "./images/account.png";
import historyImage from "./images/history.png";
import settingsImage from "./images/settings.png";
import "./style.css";

function SideBar() {
    return (
        <div className="sideBar" >
            <RouterButton
                label="Dashboard"
                destination="/"
                graphic={dashboardImage}
            />
            <div className="sideBarDivider" />
            <RouterButton
                label="Account"
                destination="account"
                graphic={accountImage}
            />
            <div className="sideBarDivider" />
            <RouterButton
                label="History"
                destination="history"
                graphic={historyImage}
            />
            <div className="sideBarDivider" />
            <RouterButton
                label="Settings"
                destination="settings"
                graphic={settingsImage}
            />
        </div>
    );
}

export default SideBar;
