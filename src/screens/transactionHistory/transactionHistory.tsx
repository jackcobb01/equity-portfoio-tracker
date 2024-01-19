import React, { useState } from "react";
import Label from "../../components/label/label.tsx";
import transactionHistory from "../../data/transactionHistory.json";
import { formatDate, formatTime } from "../../utils/dateUtils.tsx";
import "./style.css";

function TransactionHistory() {
    // constants
    const dateInformation: string[] = [];
    const transactionTypeInformation: string[] = [];
    const symbolInformation: string[] = [];
    const amountInformation: string[] = [];
    const priceInformation: string[] = [];
    const quantityInformation: string[] = [];

    // state variables
    const [history, setHistory] = useState(transactionHistory);

    // first sort the transaction history data by date
    const compareByDate = (a, b) => {
        if (a.dateOfTransaction > b.dateOfTransaction) {
            return -1;
        }
        return 1;
    };
    history.sort(compareByDate);

    // now we parse the transaction history data and fill the array information constants
    for (var i = 0; i < history.length; i++) {
        const transaction = history[i];
        dateInformation.push(transaction.dateOfTransaction);
        transactionTypeInformation.push(transaction.transactionType);
        symbolInformation.push(transaction.symbol || "");
        amountInformation.push(transaction.amount?.toString());
        priceInformation.push(transaction.price?.toString() || "");
        quantityInformation.push(transaction.quantity?.toString() || "");
    }

    return (
        <div className="historyScreen">
            <div className="historyScreenPanel">
                <Label text="Transaction History" styling="largeLabel" />
                <div className="historyTitleDivider"/>
                <div className="historyTable">
                    <div className="historyTableColumn">
                        <Label text="Date" />
                        {dateInformation.map((date) => {
                            const dateObject = new Date(date);
                            return <Label text={formatDate(dateObject)} />
                        })}
                    </div>
                    <div className="historyTableColumn">
                        <Label text="Time" />
                        {dateInformation.map((date) => {
                            const dateObject = new Date(date);
                            return <Label text={formatTime(dateObject)} />
                        })}
                    </div>
                    <div className="historyTableColumn">
                        <Label text="Transaction Type" />
                        {transactionTypeInformation.map((transactionType) => {
                            return <Label text={transactionType} />
                        })}
                    </div>
                    <div className="historyTableColumn">
                        <Label text="Symbol" />
                        {symbolInformation.map((symbol) => {
                            if (symbol === "") {
                                return <Label text={"null"} styling="nullLabel" />
                            }
                            return <Label text={symbol} />
                        })}
                    </div>
                    <div className="historyTableColumn">
                        <Label text="Amount" />
                        {amountInformation.map((amount) => {
                            return <Label text={amount} />
                        })}
                    </div>
                    <div className="historyTableColumn">
                        <Label text="Price" />
                        {priceInformation.map((price) => {
                            if (price === "") {
                                return <Label text={"null"} styling="nullLabel" />
                            }
                            return <Label text={price} />
                        })}
                    </div>
                    <div className="historyTableColumn">
                        <Label text="Quantity" />
                        {quantityInformation.map((quantity) => {
                            if (quantity === "") {
                                return <Label text={"null"} styling="nullLabel" />
                            }
                            return <Label text={quantity} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionHistory;
