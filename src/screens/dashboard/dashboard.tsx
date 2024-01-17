import React, { useState, useEffect } from "react";
import Label from "../../components/label/label.tsx";
import portfolioInformation from "../../mockedData/portfolioInformation.json";
import { formatTime } from "../../utils/dateUtils.tsx";
import "./style.css";

function Dashboard() {

    // state variables
    const [currentTime, setCurrentTime] = useState(new Date());

    // contain the clock logic in the following useEffect, which updates state every second
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="dashboardScreen">
            <div className="dashboardHeader">
                <Label text={ "$" + portfolioInformation.mockedPortfolioValue } styling="largeLabelNoMargin" />
                <Label text={ formatTime(currentTime) } styling="labelNoMargin" />
            </div>
            Dashboard
        </div>
    );
}

export default Dashboard;
