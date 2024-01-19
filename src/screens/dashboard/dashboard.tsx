import React, { useState, useEffect } from "react";
import Label from "../../components/label/label.tsx";
import { formatTimeAndDate } from "../../utils/dateUtils.tsx";
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
                <Label text={ "$50,000" } styling="largeLabelNoMargin" />
                <Label text={ formatTimeAndDate(currentTime) } styling="labelNoMargin" />
            </div>
        </div>
    );
}

export default Dashboard;
