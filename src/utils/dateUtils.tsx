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

// the following is a function that formats the time state object
export const formatTime = (unformattedTime) => {
    var timeType = "AM";
    var unformattedHours = unformattedTime.getHours();
    if (unformattedHours > 12) {
        unformattedHours = unformattedHours - 12;
        timeType = "PM";
    }

    var unformattedSeconds = unformattedTime.getSeconds();
    if (unformattedSeconds < 10) {
        unformattedSeconds = '0' + unformattedSeconds;
    }
    
    return `${DAYS_OF_THE_WEEK[unformattedTime.getDay()]} 
        ${MONTHS[unformattedTime.getMonth()]}
        ${unformattedTime.getDate()}${getDaySuffix(unformattedTime.getDate())},
        ${unformattedHours}:${unformattedTime.getMinutes()}:${unformattedSeconds} ${timeType}`;
}
