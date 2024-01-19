import React from "react";
import Cookies from 'universal-cookie';
import Label from "../../components/label/label.tsx";
import accountInformation from "../../data/accountInformation.json";
import { formatDate } from "../../utils/dateUtils.tsx";
import RouterButton from "../../components/routerButton/routerButton.tsx";
import "./style.css";

function Account({ setLoggedOutCallback }) {
    // constants
    const cookies = new Cookies(null, { path: '/' });
    const mockDateOfCreation = new Date(
        accountInformation.mockYearOfCreation,
        accountInformation.mockMonthOfCreation,
        accountInformation.mockDayOfCreation,
        0, 0, 0, 0
    );

    return (
        <div className="accountScreen">
            <div className="accountScreenPanel">
                <Label text="Account Information" styling="largeLabel" />
                <div className="accountTitleDivider"/>
                <Label text={`Account Name: ${accountInformation.mockAccountFirstName}
                    ${accountInformation.mockAccountLastName}`} />
                <Label text={`Date of Creation: ${formatDate(mockDateOfCreation)}`}/>
                <RouterButton
                    label="Logout"
                    destination="/"
                    additionalStyling={ { margin: 10 } }
                    onClick={ () => {
                        cookies.remove('portfolio-tracker-logged-in');
                        setLoggedOutCallback(false);
                    } }
                />
            </div>
        </div>
    );
}

export default Account;
