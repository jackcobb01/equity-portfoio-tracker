// constants
export const DAYS_OF_THE_WEEK = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
export const MONTHS = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

// this function returns the appropriate suffix for the day of the month
const getDaySuffix = (dayNumber) => {
    const finalDigit = dayNumber % 10;
    if (finalDigit === 1) {
        return "st";
    } else if (finalDigit === 2) {
        return "nd";
    } else {
        return "th";
    }
};


// the following is a function that formats the date instance into a time
export const formatTime = (unformattedDate) => {
    var timeType = "AM";
    var unformattedHours = unformattedDate.getHours();
    if (unformattedHours > 12) {
        unformattedHours = unformattedHours - 12;
        timeType = "PM";
    }

    var unformattedSeconds = unformattedDate.getSeconds();
    if (unformattedSeconds < 10) {
        unformattedSeconds = '0' + unformattedSeconds;
    }

    return `${unformattedHours}:${unformattedDate.getMinutes()}:${unformattedSeconds} ${timeType}`;
};

// the following is a function that formats a date instance into a clock
export const formatTimeAndDate = (unformattedDate) => {
    var timeType = "AM";
    var unformattedHours = unformattedDate.getHours();
    if (unformattedHours > 12) {
        unformattedHours = unformattedHours - 12;
        timeType = "PM";
    }

    var unformattedSeconds = unformattedDate.getSeconds();
    if (unformattedSeconds < 10) {
        unformattedSeconds = '0' + unformattedSeconds;
    }
    
    return `${DAYS_OF_THE_WEEK[unformattedDate.getDay()]} 
        ${MONTHS[unformattedDate.getMonth()]}
        ${unformattedDate.getDate()}${getDaySuffix(unformattedDate.getDate())},
        ${formatTime(unformattedDate)}`;
};

// the following is a function that formats the date instance into a date
export const formatDate = (unformattedDate) => {
    return `${MONTHS[unformattedDate.getMonth()]}
            ${unformattedDate.getDate()}${getDaySuffix(unformattedDate.getDate())},
            ${unformattedDate.getYear() + 1900}`;
};
