function updateDateTime () {
    var dateTime = new Date();

    const hoursSpan = document.getElementById('hour'); //Hours and eval time 'suffix'
    var hours = dateTime.getHours();
    var timeSuffix = 'PM';
    if (hours < 10) 
        {
            timeSuffix = 'AM';
        };

    if (hours > 12) 
    {
        hours -= 12;
        timeSuffix = 'PM';
    };
    hoursSpan.textContent = hours;

    const suffixSpan = document.getElementById('suffix'); //Display time 'suffix'
    suffixSpan.textContent = ' ' + timeSuffix;

    const minutesSpan = document.getElementById('minute'); //Minutes
    var minutes = dateTime.getMinutes();
    if (minutes < 10) 
        {
            var tempMin = minutes;
            minutes = '0' + tempMin; 
        };
    minutesSpan.textContent = minutes;

    const secondsSpan = document.getElementById('second'); //Seconds
    var seconds = dateTime.getSeconds();
    if (seconds < 10) {
        var tempSec = seconds;
        seconds = '0' + tempSec; };
    secondsSpan.textContent = seconds;

    const daySpan = document.getElementById('day'); //Day
    var days = dateTime.getDay();
        switch (days) {
            case 1 : daySpan.textContent = 'Monday'
                break;
            case 2 : daySpan.textContent = 'Tuesday'
                break;
            case 3 : daySpan.textContent = 'Wednesday'
                break;
            case 4 : daySpan.textContent = 'Thursday'
                break;
            case 5 : daySpan.textContent = 'Friday'
                break;
            case 6 : daySpan.textContent = 'Saturday'
                break;
            case 7 : daySpan.textContent = 'Sunday'
                break;
            default : daySpan.textContent = 'Undefined'
        };

    const monthSpan = document.getElementById('month'); //Month
    var months = dateTime.getMonth();
    switch (months) 
    {
        case 0 : monthSpan.textContent = 'January'
            break;
        case 1 : monthSpan.textContent = 'February'
            break;
        case 2 : monthSpan.textContent = 'March'
            break;
        case 3 : monthSpan.textContent = 'April'
            break;
        case 4 : monthSpan.textContent = 'May'
            break;
        case 5 : monthSpan.textContent = 'June'
            break;
        case 6 : monthSpan.textContent = 'July'
            break;
        case 7 : monthSpan.textContent = 'August'
            break;
        case 8 : monthSpan.textContent = 'September'
            break;
        case 9 : monthSpan.textContent = 'October'
            break;
        case 10 : monthSpan.textContent = 'November'
            break;
        case 11 : monthSpan.textContent = 'December'
            break;
        default : monthSpan.textContent = 'Undefined'
    }

    const dateSpan = document.getElementById('date'); //Date
    var dates = dateTime.getDate();
    switch (dates) 
    {
        case 1 : dateSpan.textContent = dates + 'st'
            break;
        case 2 : dateSpan.textContent = dates + 'nd'
            break;
        case 3 : dateSpan.textContent = dates + 'rd'
            break;
        case 21 : dateSpan.textContent = dates + 'st'
            break;
        case 31 : dateSpan.textContent = dates + 'st'
            break;
        default :
            dateSpan.textContent = dates + 'th'
    };

    const yearSpan = document.getElementById('year'); //Year
    yearSpan.textContent = dateTime.getFullYear();
} ;

setInterval(updateDateTime, 1000); //Run function that evals and displays date and time every 1 second

